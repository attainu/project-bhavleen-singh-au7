import express from 'express';
import PostControl from '../controllers/post';
import AvatarControl from '../controllers/avatar';
import upload from '../config/multer';
import auth from '../middlewares/auth';

const { createPost, getPosts, getPostById, updatePost, deletePost } = PostControl;
const { multerErrHandler } = AvatarControl;

const router = express.Router();

router.post('/posts', auth, upload.single('image'), createPost, multerErrHandler)
router.get('/posts', auth, getPosts)
router.get('/posts/:id', auth, getPostById)
router.patch('/posts/:id', auth, updatePost)
router.delete('/posts/:id', auth, deletePost)

export default router;