import asyncHandler = require('express-async-handler')
import { Request, Response } from 'express';
import { IResolution } from './resolution.types';
import { globals } from '../../main';

export const setRes = asyncHandler(async (req: Request, res: Response) => {
    const stuff = req.body as IResolution
    console.log("hit!");
    (await globals).window.resX = stuff.width;
    (await globals).window.resY = stuff.height;
    (await globals).window.screens = stuff.screens
    res.json((await globals).window)
})

export const getRes = asyncHandler(async (req: Request, res: Response) => {
    res.json({height: (await globals).window.resY, width: (await globals).window.resX, screens: (await globals).window.screens})
})