
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");



//passport-local-mongoose it will automatically add the username and the p
//password(hashed and salted) field into the the schema so you dont need to it.

const userSchema = new Schema({

    email: {
        type: String,
        required: true,
    }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
