import mongoose from 'mongoose';
import validator from 'validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const postSchema = new mongoose.Schema({
    image: {
        public_id: {
            type: String
        },
        imageUrl:{
            type: String
        }
    },
    caption: {
        type: String,
        trim: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true,
        required: true,
        ref: 'User'
    }

})