import {Router} from 'express'

import {default as resolution} from './resolution/resolution.routes'

const router = Router()

router.use('/resolution', resolution)

export {router as routes}