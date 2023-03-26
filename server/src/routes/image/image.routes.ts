import {Router} from 'express'
import { getImg, setImg } from '../../controller/image/image.controller'

const router = Router()

router.route('/').post(setImg).get(getImg)
router.route('/:screenId').get(getImg)
export default router;