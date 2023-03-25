import {Router} from 'express'
import { getRes, setRes } from '../../controller/resolution/resolution.controller'

const router = Router()

router.route('/').post(setRes).get(getRes)

export default router;