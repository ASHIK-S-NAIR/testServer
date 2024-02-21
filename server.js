const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

const PORT = process.env.PORT || 8001;

app.get("/", (req, res) => {
  res.json({ msg: "get is running" });
});

io.on("connection", (socket) => {
  console.log("socket is active to be connected");

  socket.on("joinMetrice", (data) => {
    socket.join(data);
    console.log("joined from server");
  });

  socket.on("sendCpuUsage", (data) => {
    socket.to(data.metriceId).emit("receiveCpuUsage", data);
    console.log(data);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
