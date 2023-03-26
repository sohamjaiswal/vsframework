import { Image } from "./image"
import { imageSplitter } from '../utils/imageSplitter.utils';
import { globals } from '../main';
import { Window } from "./window";

export class ScreenImages {
    public images: Promise<Array<string>> | Array<string>
    window: Window
    constructor(window: Window) {
        this.window = window
        this.images = []
    }
    async reset() {
        const newWindowResX = (await globals).window.resX
        const newWindowResY = (await globals).window.resY
        console.log(newWindowResX, newWindowResY)
        this.images = await imageSplitter(newWindowResX, newWindowResY)
        // console.log('hi')
        // console.log(this.images)
        return this.images
    }
}