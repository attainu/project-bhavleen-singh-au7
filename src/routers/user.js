import express from 'express';
import upload from '../config/multer';

// import { signUpValidate, logInValidate } from '../middlewares/validate'
import auth from '../middlewares/auth';
import UserAuthControl from '../controllers/auth';
import AvatarControl from '../controllers/avatar';         
import UserControl from '../controllers/user';

const router = express.Router();

/* 
LOGIN AND SIGNUP ARE PUBLIC ROUTES
*/
const { signup, login, logout, logoutAll } = UserAuthControl;
const { checkForUsername, userProfile, updateUserProfile, deleteUserProfile } = UserControl
const { getAvatar, deleteAvatar, multerErrHandler, uploadAvatar } = AvatarControl

// Sign Up  
router.post('/users', signup);

// Log In 
router.post('/users/login', login);

// Check if username exists or not
router.post('/users/username/check', checkForUsername);

// Log Out
router.post('/users/logout', auth, logout);

// Log out from every device 
router.post('/users/logoutAll', auth, logoutAll);

// upload Profile Picture
router.post('/users/me/avatar', auth, upload.single('avatar'), uploadAvatar, multerErrHandler);

// Get Profile Picture   
router.get('/users/me/avatar', auth, getAvatar);

// Delete profile picture
router.delete('/users/me/avatar', auth, deleteAvatar);

//User profile
router.get('/users/me', auth, userProfile);

//Update profile
router.patch('/users/me', auth, updateUserProfile);

// Delete user profile    
router.delete('/users/me', auth, deleteUserProfile);




export default router;