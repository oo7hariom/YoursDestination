
const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn,isOwner,validateListing } = require("../middleware.js");

//-------------------*********************--------------------------


//----------------------------ROUTES---------------------------------------------------


// Index route main page
router.get("/", wrapAsync(async (req, res) => {
    const allListing = await Listing.find({});
    res.render("listings/index.ejs", { allListing });
}));

// New route
router.get("/new",isLoggedIn ,(req, res) => {
    res.render("listings/new.ejs");
});

// Show details of specific listing
router.get("/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path : "author",
            },
        })
        .populate("owner");
    if (!listing) {
          req.flash("error", "Listing you requested for does not exist!");
         res.redirect("/listings");
    }
    console.log(listing.owner);
    res.render("listings/show.ejs", { listing });
}));

// Edit route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
         res.redirect("/listings");
    } 
    res.render("listings/edit.ejs", { listing });
}));

// Update route
router.put("/:id", validateListing, isLoggedIn,isOwner,wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success", " Listing Updated!  ");
    res.redirect(`/listings/${id}`);
}));

// Delete route
router.delete("/:id",isLoggedIn,isOwner,wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
     req.flash("success", " Listing Deleted!");
    res.redirect("/listings");
}));

// Create route
router.post(
    "/",
    validateListing,
    isLoggedIn,
    wrapAsync(async (req, res) => {
    
        const newListing = new Listing(req.body.listing);
        newListing.owner = req.user._id;
        await newListing.save();
        req.flash("success", "New Listing Created!");
    res.redirect("/listings");
    })
);


//----------------------------*****************************-------------------------------

module.exports = router; 