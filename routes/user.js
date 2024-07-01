const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");



router.get("/signup", (req, res, next) => {
    res.render("users/signup.ejs");
});

router.post("/signup",
    wrapAsync(async (req, res) => {
    
        try {
            
            let { username, email, password } = req.body;
            const newUser = new User({ email, username });
            const registerdUser = await User.register(newUser, password);
            console.log(registerdUser);
            req.flash("success", "Welcome to Yours-Destination !!");
            res.redirect("/listings");
        }

        catch (err) {
            req.flash("error", err.message);
            res.redirect("/signup");
        }
    })
);


router.get("/login", (req, res) => {
    res.render("users/login.ejs");
});

router.post("/login",
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true,
    }),

    async (req, res) => {

        // req.flash("success", "Welcome to Yours-Destination!!");
        // console.log('Flash success message:', req.flash('success'));  // Debug log
        // res.redirect("/listings");
        res.send("kkk");
    }
);

module.exports = router;