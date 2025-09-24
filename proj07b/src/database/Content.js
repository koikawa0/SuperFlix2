import mongoose from "mongoose";

const scheme = new mongoose.Schema({
    cover: String,
    track: String,
    title: String,
    description: String,
    genre: String,
    year: Number,
    duration: Number,
    trackNumber: Number
},
{collection: "proj07"})

const content = mongoose.model("content", scheme)

export { content }