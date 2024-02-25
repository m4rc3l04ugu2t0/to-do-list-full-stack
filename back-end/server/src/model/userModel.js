const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id: String,
});

const UserSchema = mongoose.model("User", userSchema);

module.exports = UserSchema;
