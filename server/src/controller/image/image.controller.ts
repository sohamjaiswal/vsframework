import asyncHandler = require('express-async-handler')
import { Request, Response } from 'express';
import { IImage } from './image.types';
import { globals, port, io } from '../../main';

import {default as getImgSize} from 'image-size'
import path = require('path');
import sharp = require('sharp');

export const setImg = asyncHandler(async (req: Request, res: Response) => {
    const stuff = req.body as IImage
    io.emit('image_update', {data:`${stuff.image}.jpg`})
    globals.image.image = `${stuff.image}.jpg`
    res.json({image: `http://localhost:${port}/images/${globals.image.image}`})
})

export const getImg = asyncHandler(async (req: Request, res: Response) => {
    const totalWidth = globals.window.resX * globals.window.screens

    console.log("details:", globals.window.resX, globals.window.screens ,totalWidth)
    const totalHeight = globals.window.resY
    const image = path.join(__dirname, '../../images/', globals.image.image)
    const dimensions = getImgSize(image)
    if (dimensions.width as number > totalWidth || dimensions.height as number > totalHeight) {
        sharp(image)
            .resize({
                width: totalWidth,
                height: totalHeight,
                fit: "inside",
                position: "center",
                background: {
                    r: 0,
                    g: 0,
                    b: 0,
                    alpha: 0
                }
            })
    }
    res.json({image: `http://localhost:${port}/images/${globals.image.image}`, screens: globals.window.screens})
})