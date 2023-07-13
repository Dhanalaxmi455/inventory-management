const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    username: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    email: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    password: {
        type: mongoose.Schema.Types.String,
        required: true

    },
    mobile: {
        type: mongoose.Schema.Types.Number,
        required: true
    },
    createdAt: {
        type: mongoose.Schema.Types.String,
        required: true

    },
    updatedAt: {
        type: mongoose.Schema.Types.String,
        required: true

    }

})
module.exports = mongoose.model("User", userSchema);