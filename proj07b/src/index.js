import express from "express";
import cors from "cors";
import notifier from "node-notifier";
import morgan from "morgan";

import routes from "./Routes.js";

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);
server.use(morgan("dev"));

server.listen(4000, function () {
  //notification
});

notifier.notify({
  title: "proj07",
  message: "WORKING SERVER",
  icon: "./src/jinja.svg",
});
