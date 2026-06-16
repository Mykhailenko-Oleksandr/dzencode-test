import { Server } from "socket.io";

let activeSessions = 0;

export const initWebSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    activeSessions++;
    console.log(`Користувач підключився. Активних сесій: ${activeSessions}`);
    io.emit("active_sessions_count", activeSessions);

    socket.on("disconnect", () => {
      activeSessions = Math.max(0, activeSessions - 1);
      console.log(`Користувач відключився. Активних сесій: ${activeSessions}`);
      io.emit("active_sessions_count", activeSessions);
    });
  });

  return io;
};
