import express from 'express';
const router = express.Router();
import {
  getCategorys,
} from '../controllers/categoryController.js';


router.route('/').get(getCategorys)
export default router;
