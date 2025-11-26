import mongoose from "mongoose";

const scheme = new mongoose.Schema(
  {
    cover: String,
    track: String,
    title: String,
    description: String,
    genre: String,
    year: Number,
    duration: Number,
    agegroup: Number,
  },
  { collection: "data" }
);

const content = mongoose.model("content", scheme);
console.log({ content });

export { content };
