const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Listing = require("./models/listing.js");

const methodOverride = require("method-override");

const MONGO_URL = "mongodb://127.0.0.1:27017/YoursDestination";
main()
    .then(() => {
    console.log("connected to DataBase");
    
}).catch((err) => {
    console.log(err);
});

 async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//******************* ---------- ************************** */
app.listen(8080, () => {
    console.log("server is listining to 8080 ");
});

// app.get("/testListing" ,async (req, res) => {
//     let sample = new Listing({
//         title: "my new villa",
//         description: "by the beach",
//         price: 1200,
//         location: "Banglore east-west",
//         country:"India"
//     })
//     await sample.save();
//     console.log("sample saved successful");
//     res.send("successful testing");
// });

//index route main page
app.get("/listings", async (req, res) => {
    const allListing = await Listing.find({});
    res.render("listings/index.ejs", { allListing });

});

//new route
app.get("/listings/new", (req, res) => {
    
    res.render("listings/new.ejs");
});


// show deatils of specific home
app.get("/listings/:id", async (req, res) => {
    
    let { id } = req.params;
    const listing = await Listing.findById(id);

    res.render("listings/show.ejs", { listing });

});

//create route
app.post("/listings" , async (req, res) => {
    const newListing = new Listing(req.body.listing);
   await  newListing.save();
    res.redirect("/listings");
});

//edit route
app.get("/listings/:id/edit",async (req, res) => {
      let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
});

//  update route
app.put("/listings/:id", async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect("/listings");
})



app.get("/", (req, res) => {
    res.send("you are at main page");
});

