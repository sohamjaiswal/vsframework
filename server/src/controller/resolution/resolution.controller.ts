import asyncHandler = require('express-async-handler')
import { Request, Response } from 'express';
import { IResolution } from './resolution.types';
import { globals } from '../../main';

export const setRes = asyncHandler(async (req: Request, res: Response) => {
    const stuff = req.body as IResolution
    console.log("hit!")
    globals.window.resX = stuff.width
    globals.window.resY = stuff.height
    globals.window.screens = stuff.screens
    res.json(globals.window)
})

export const getRes = asyncHandler(async (req: Request, res: Response) => {
    res.json({height: globals.window.resY, width: globals.window.resX, screens: globals.window.screens})
})