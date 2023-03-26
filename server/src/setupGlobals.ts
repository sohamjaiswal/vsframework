import { Window } from "./components/window"
import { Image } from "./components/image"

import fs from 'fs'
import path from "path"
import { ScreenImages } from "./components/screenImages"

export const setupGlobals = async() => {
    const window = new Window(900,400,3)
    const image = new Image(1)
    console.log(image._image)
    const instanceImages = new ScreenImages(window)
    return { window, image, instanceImages}
}