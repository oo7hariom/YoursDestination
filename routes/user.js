const express = require('express');
const router = express.Router();
const User = require('../models/user');
const wrapAsync = require('../utils/wrapAsync');
const passport = require('passport');

router.get('/signup', (req, res) => {
    res.render('users/signup.ejs');
});

router.post('/signup', wrapAsync(async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err) => {
            
            if (err) {
                return next(err);
            }
                 req.flash('success', 'Welcome to Yours-Destination !!');
                res.redirect('/listings');
        })
       
    } catch (err) {
        req.flash('error', err.message);
        res.redirect('/signup');
    }
}));



//----------------login router--------------
router.get('/login', (req, res) => {
    res.render('users/login.ejs');
});

router.post('/login',
    passport.authenticate('local', {
        failureRedirect: '/login',
        failureFlash: true,
    }), (req, res) => {
        console.log('Authenticated User:', req.user); // Add this line
        req.flash('success', 'Welcome to Yours-Destination!!');
        res.redirect('/listings');
    }
);

//------LOGOUT ROUTER--------------------------------

router.get("/logout", (req, res,next) => {
    
    req.logout((err) => {
        if (err) {
            next(err);
        }
        req.flash("success", "you are logged Out!");
        res.redirect("/listings");
    })
});

module.exports = router;
