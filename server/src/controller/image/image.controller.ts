import asyncHandler = require('express-async-handler')
import { Request, Response } from 'express';
import { IImage } from './image.types';
import { globals, io } from '../../main';
import path = require('path');
import { lgArrange } from '../../utils/lgArrange.utils';

export const setImg = asyncHandler(async (req: Request, res: Response) => {
    const stuff = req.body as IImage;
    console.log(stuff)
    ; (await globals).image.image = stuff.image;
    io.emit('image_update', { data: "image changed" });
    res.json({})
})

export const getImg = asyncHandler(async (req: Request, res: Response) => {
    if (req.params.screenId) {
        const screenId = Number(req.params.screenId)
        const screenMapper = lgArrange(Array.from({ length: (await globals).window.screens }, (_, i) => i + 1))
        const screenToImageMap = new Map<number, string>()
        const images = await (await globals).instanceImages.reset()
        screenMapper.forEach(async (k, i) => {
            console.log(images[i])
            screenToImageMap.set(k, images[i])
        })
        res.json({image: `${screenToImageMap.get(screenId)}`})
    } else {
        res.json({error: "Screen ID required."})
    }
})
