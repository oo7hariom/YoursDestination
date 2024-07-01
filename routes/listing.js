
const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");

//-------------------*********************--------------------------
const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
   
    if (error) {
        throw new ExpressError(400, error);
    }
    else
        next();
};


//----------------------------ROUTES---------------------------------------------------


// Index route main page
router.get("/", wrapAsync(async (req, res) => {
    const allListing = await Listing.find({});
    res.render("listings/index.ejs", { allListing });
}));

// New route
router.get("/new", (req, res) => {
    res.render("listings/new.ejs");
});

// Show details of specific listing
router.get("/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    if (!listing) {
          req.flash("error", "Listing you requested for does not exist!");
         res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
}));

// Edit route
router.get("/:id/edit", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
         res.redirect("/listings");
    } 
    res.render("listings/edit.ejs", { listing });
}));

// Update route
router.put("/:id", validateListing, wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success", " Listing Updated!  ");
    res.redirect(`/listings/${id}`);
}));

// Delete route
router.delete("/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
     req.flash("success", " Listing Deleted!");
    res.redirect("/listings");
}));

// Create route
router.post(
    "/",
    validateListing,
    wrapAsync(async (req, res) => {
    
    const newListing = new Listing(req.body.listing);
        await newListing.save();
        req.flash("success", "New Listing Created!");
    res.redirect("/listings");
    })
);


//----------------------------*****************************-------------------------------

module.exports = router; 