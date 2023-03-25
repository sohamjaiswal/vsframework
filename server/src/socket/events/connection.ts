import { io } from "../../main";

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`)
})