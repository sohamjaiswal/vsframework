import path from "path"
import fs from "fs"

export class Image {
    public _image: string 
    constructor(image: 0 | 1 | 2) {
        this._image = path.join(__dirname, '../images', fs.readdirSync(path.join(__dirname, '../images'))[image])
    }

    set image(idx: 0 | 1 | 2) {
        this._image = path.join(__dirname, '../images', fs.readdirSync(path.join(__dirname, '../images'))[idx])
    }
}

