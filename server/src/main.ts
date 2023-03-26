import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import {routes} from './routes';
import { setupGlobals } from './setupGlobals';
import cors from 'cors'
import {default as http} from 'http'
import {Server} from 'socket.io'
import path from 'path';

import {default as mahSocket} from './setupSocks'

// Web requests and server shit
dotenv.config();

const app: Express = express();
export const port = process.env.PORT as string;

export const globals = setupGlobals()


app.use(cors())
app.use(express.json())
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use('/cache', express.static(path.join(__dirname, 'cache')))
app.use(routes)

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

// Live update shit
const server = http.createServer(app)

export const io = new Server(server, {
  cors: {
    origin: "*",
    methods: "*"
  }
})

server.listen(Number(port) + 1, () => {
  console.log(`🔌[sockets]: Server is running at http://localhost:${Number(port) + 1}`)
})

mahSocket(io)
