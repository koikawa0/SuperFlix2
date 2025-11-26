import notifier from "node-notifier";
import mongoose from "mongoose";
import "dotenv/config";
const adress = process.env.MONGOURI;

mongoose
  .connect(adress)
  .then(function () {
    notifier.notify({
      title: "proj07",
      message: "DATABASE CONNECTED",
      icon: "/",
    });
    console.log("Funciona trem");
  })
  .catch(function (error) {
    console.log("Deu ruim cambada:", error.message);
  });

export default mongoose;
