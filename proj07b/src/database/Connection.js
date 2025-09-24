import notifier from "node-notifier";
import mongoose from "mongoose";
import "dotenv/config"
const adress = process.env.MONGOURI;
const option = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(adress, option)
    .then 
    (function(){
        notifier.notify({
            title: "proj07",
            message: "DATABASE CONNECTED",
            icon: "/"
        })
    })
    .catch(function(error){
        console.log(error.message)
    })