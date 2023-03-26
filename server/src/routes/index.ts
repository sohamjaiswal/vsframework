import {Router} from 'express'

import { default as resolution } from './resolution/resolution.routes'
import {default as image} from './image/image.routes'

const router = Router()

router.use('/resolution', resolution)
router.use('/image', image)

export {router as routes}