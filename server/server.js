import express from "express";
import http from "http";
import cors from "cors";
import dataRoutes from "./src/routes/dataRoutes.js";
import { initWebSocket } from "./src/config/socket.js";
import { logger } from "./src/middleware/logger.js";
import { notFoundHandler } from "./src/middleware/notFoundHandler.js";
import { errorHandler } from "./src/middleware/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

const PORT = process.env.PORT ?? 3001;

app.use("/api", dataRoutes);

const server = http.createServer(app);

initWebSocket(server);

app.use(notFoundHandler);
app.use(errorHandler);

server.listen(PORT, () => {
  console.log(`Cервер запущено на порту ${PORT}`);
});
