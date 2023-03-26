import { Window } from "./components/window"
import { Image } from "./components/image"

import fs from 'fs'
import path from "path"

export const setupGlobals = () => {
    const window = new Window(0,0,0)
    const image = new Image(fs.readdirSync(path.join(__dirname, 'images'))[1])
    return { window, image }
}