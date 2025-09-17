import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id: {type: String, required: true},
})