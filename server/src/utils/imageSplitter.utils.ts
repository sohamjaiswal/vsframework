import sharp from "sharp"
import { globals, port } from "../main"

import path from 'path'

export const imageSplitter = async (totalWidth: Promise<number> | number, totalHeight: Promise<number> | number) => {
    let images: Array<string> = []
    const resizedImage = await sharp((await globals).image._image).resize({
        width: ((await totalWidth) as number) * (await globals).window.screens,
        height: (await totalHeight) as number,
        fit: "contain",
        position: "center",
        background: {
            r: 0,
            g: 0,
            b: 0,
            alpha: 0
        }
    })
    for (let i = 0; i < (await globals).window.screens; i++) {
        // console.log(i)
        const width = (await globals).window.resX
        const height = (await globals).window.resY
        const top = 0
        const left = i * (await globals).window.resX
        const currImg = await resizedImage.extract({ width, height, top, left }).toFile(path.join(__dirname, '../cache', `${i}.png`))

        images.push(`http://localhost:${port}/cache/${i}.png`)
    }
    return images
}