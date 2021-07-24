import express from 'express';

import { getCakes, createCake/*, getPost, createPost, updatePost, likePost, deletePost*/ } from '../controllers/cakesController.js';

const router = express.Router();

router.get('/', getCakes);
router.post('/', createCake);
// router.get('/:id', getPost);
// router.patch('/:id', updatePost);
// router.delete('/:id', deletePost);
// router.patch('/:id/likePost', likePost);

export default router;
