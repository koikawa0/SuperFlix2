import mongoose from "mongoose";

const scheme = new mongoose.Schema({
    email: String,
    password: String
},
{collection: "Users"})

const user = mongoose.model("user", scheme)

export {user}