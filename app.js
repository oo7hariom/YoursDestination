const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Listing = require("./models/listing.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const MONGO_URL = "mongodb://127.0.0.1:27017/YoursDestination";
const { listingSchema } = require("./schema.js");
const { reviewSchema } = require("./schema.js");
const Review = require("./models/review.js");
const listings = require("./routes/listing.js");

main()
    .then(() => {
        console.log("connected to DataBase");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

// function validateListing(req, res, next) {
//     const { listing } = req.body;
//     if (!listing.title || !listing.price || !listing.location || !listing.country) {
//         throw new ExpressError(400, "All fields are required");
//     }
//     if (isNaN(listing.price)) {
//         throw new ExpressError(400, "Price must be a number");
//     }
//     next();
// }



const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
   
    if (error) {
        throw new ExpressError(400, error);
    }
    else
        next();
};




app.use("/listings", listings);




//review route
app.post("/listings/:id/reviews",validateReview, wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    res.redirect(`/listings/${listing._id}`);
}));

//delete review route

app.delete("/listings/:id/reviews/:reviewId", wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });       
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`);


}));


app.get("/", (req, res) => {
    res.send("You are at the main page");
});

app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found"));
});

app.use((err, req, res, next) => {
    const { statusCode = 500, message = "Something went wrong" } = err;
    // res.status(statusCode).send(message);
    res.render("error.ejs", {message});
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
