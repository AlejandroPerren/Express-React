import express from 'express';
import { createBlog, deleteBlog, getAllblog, getBlog, updateBlog } from '../controllers/BlogController.js';
const router = express.Router();

router.get('/', getAllblog)
router.get('/:id', getBlog)
router.post('/',createBlog)
router.put('/:id', updateBlog)
router.delete('/:id',deleteBlog)   

export default router

