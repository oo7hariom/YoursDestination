const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
        
    } ,
    description: String,

    image: {
    filename: {
      type: String,
      default: 'default_filename'
    },
    url: {
      type: String,
      default: "https://img.freepik.com/free-psd/modern-house-isolated-transparent-background_191095-26815.jpg?t=st=1719211934~exp=1719215534~hmac=82896148ded23f27a55d25c5ee7f19b362d69b689231ac87ef309bd664016867&w=740",
      set: v => v === "" ? "https://img.freepik.com/free-psd/modern-house-isolated-transparent-background_191095-26815.jpg?t=st=1719211934~exp=1719215534~hmac=82896148ded23f27a55d25c5ee7f19b362d69b689231ac87ef309bd664016867&w=740" : v
    }
  },
    price: Number,
    location: String,
    country:String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
