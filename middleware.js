 
 
module.exports.isLoggedIn = (req, res, next) => {
    // console.log(req.path , "...", req.originalUrl);
   
    if (!req.isAuthenticated()) {
        //redirect url save 
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "First login to do furthur action");
        return res.redirect("/login");
    } 
    next();
}


module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}