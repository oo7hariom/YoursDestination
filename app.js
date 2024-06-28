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

const validateListing = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
   
    if (error) {
        throw new ExpressError(400, error);
    }
    else
        next();
};

const validatereview = (req, res, next) => {
    let { error } = reviewShema.validate(req.body);
   
    if (error) {
        throw new ExpressError(400, error);
    }
    else
        next();
};



// Index route main page
app.get("/listings", wrapAsync(async (req, res) => {
    const allListing = await Listing.find({});
    res.render("listings/index.ejs", { allListing });
}));

// New route
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs");
});

// Show details of specific listing
app.get("/listings/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        throw new ExpressError(404, "Listing not found");
    }
    res.render("listings/show.ejs", { listing });
}));

// Create route
app.post("/listings",validateListing, wrapAsync(async (req, res) => {
    
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
}));

// Edit route
app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        throw new ExpressError(404, "Listing not found");
    }
    res.render("listings/edit.ejs", { listing });
}));

// Update route
app.put("/listings/:id", validateListing, wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
}));

// Delete route
app.delete("/listings/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
}));

//review route

app.post("/listings/:id/reviews",validatereview, wrapAsync(async (req, res) => {
   
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();
    
    res.redirect(`/listings/${listing._id}`);


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
