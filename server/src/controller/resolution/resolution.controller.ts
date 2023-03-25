import asyncHandler = require('express-async-handler')
import { Request, Response } from 'express';
import { IResolution } from './resolution.types';
import { globals } from '../../main';

export const setRes = asyncHandler(async (req: Request, res: Response) => {
    const stuff = req.body as IResolution
    globals.window.resX = stuff.width
    globals.window.resY = stuff.height
    res.json(globals.window)
})

export const getRes = asyncHandler(async (req: Request, res: Response) => {
    res.json('hi')
})