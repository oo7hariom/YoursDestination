
const mongoose = require("mongoose");
const initdata = require("./data.js");

const Listing = require("../models/listing.js");
 
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

const initDB = async () => {
    await Listing.deleteMany({});
    initdata.data =initdata.data.map((obj) => ({ ...obj, owner: "667fed383c07946e5d063ab9" }));
    await Listing.insertMany(initdata.data);
    console.log("data added successfull");
};

initDB();
 