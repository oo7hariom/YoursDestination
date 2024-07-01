const Listing = require("./models/listing");
 const { listingSchema,reviewSchema } = require("./schema.js");
const ExpressError = require("./utils/ExpressError.js");



module.exports.isLoggedIn = (req, res, next) => {
    // console.log(req.path , "...", req.originalUrl);
   
    if (!req.isAuthenticated()) {
        //redirect url save 
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "First login to do furthur action");
        return res.redirect("/login");
    }
    next();
};


module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner =async (req,res,next) => {
       const { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing.owner._id.equals(res.locals.currUser._id)) {
        req.flash("error", "you are not the Owner");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

 module.exports.validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
   
    if (error) {
        throw new ExpressError(400, error);
    }
    else
        next();
};

module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
   
    if (error) {
        throw new ExpressError(400, error);
    }
    else
        next();
};

