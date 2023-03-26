import { Server, Socket } from "socket.io";

let pressed = 0

export default function(io: Server): void {
  io.on("connection", (socket: Socket) => {
    // console.log(`User Connected: ${socket.id}`)

    socket.on("con_pressed", () => {
      pressed += 1
      socket.broadcast.emit("send_con_pressed", pressed)
    })
  })
}