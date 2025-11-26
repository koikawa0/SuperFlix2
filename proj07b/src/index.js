import express from "express";
import cors from "cors";
import notifier from "node-notifier";
import morgan from "morgan";
import routes from "./Routes.js";
import "./database/Connection.js";

const server = express();

// Middlewares
server.use(cors());
server.use(express.json());
server.use(morgan("dev"));

// Rotas
server.use("/api", routes);

const PORT = 4000;

server.listen(PORT, () => {
  notifier.notify({
    title: "proj07",
    message: "WORKING SERVER on port ${PORT}",
    icon: "./src/jinja.svg",
  });
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
