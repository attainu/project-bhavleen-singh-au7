import Post from '../models/post';
import uploadFileToCloudinary from '../utils/cloudinaryUpload'

export default class PostControl {

    static async createPost(req, res) {
        try {
            if(req.file) {
                const { url, public_id } = await uploadFileToCloudinary(req)
                const post = new Post({
                    image: {
                        publicId: public_id,
                        imageUrl: url
                    },
                    caption: req.body.caption,
                    owner: req.user._id
                })
    
                await post.save()
                await post.populate('owner').execPopulate()
                res.status(201).json({
                    message: 'Post uploaded successfully',
                    data: { post }
                })
            }
        } catch(e) {
            console.log(e)
            res.status(400).json({
                error: e.message
            })
        }
    }

    static async getPosts(req, res) {
        try {
            const posts = await Post.find({ owner: req.user._id })
            res.send(posts)
        } catch (e) {
            res.status(500).json({
                error: e.message
            })
        }
    }

    static async getPostById(req, res) {
        const _id = req.params.id;
        try{
            const post = await Post.findOne({ _id, owner: req.user._id })
            if (!post) {
                return res.status(404).send()
            }
            res.send(post)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    static async updatePost(req, res) {
        const updates = Object.keys(req.body);
        const canUpdate = ['caption'];
        const isValidUpdate = updates.every( value => canUpdate.includes(value) );

        if (!isValidUpdate) {
            return res.status(400).send({ error: 'Invalid updates' })
        }
        try {
            const post = await Post.findOne({ _id: req.params.id, owner: req.user._id })
            if (!post) {
                return res.status(404).send()
            }
            updates.forEach(update => post[update] = req.body[update])
            await post.save();
            res.send(post)
        } catch (err) {
            res.status(400).send(err)
        }
    }

    static async deletePost(req, res) {
        try {
            const post = await Post.findOneAndDelete({ _id: req.params.id, owner: req.user._id })
            if (!post) {
                return res.status(404).send()      
            }
            res.send({ 
                deletedData: post,
                result: "successfully deleted"
            })
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
}