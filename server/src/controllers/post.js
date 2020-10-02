import Post from "../models/post";
import uploadFileToCloudinary from "../utils/cloudinaryUpload";

export default class PostControl {
    static async createPost(req, res) {
        try {
            if (req.file) {
                const { url, public_id } = await uploadFileToCloudinary(req);
                const post = new Post({
                    image: {
                        publicId: public_id,
                        imageUrl: url,
                    },
                    caption: req.body.caption,
                    owner: req.user._id,
                });

                await post.save();
                await post.populate("owner").execPopulate();
                res.status(201).json({
                    message: "Post uploaded successfully",
                    data: { post },
                });
            }
        } catch (e) {
            console.log(e);
            res.status(400).json({
                error: e.message,
            });
        }
    }

    static async getUserPosts(req, res) {
        try {
            const posts = await Post.find({ owner: req.user._id }).sort({
                createdAt: -1,
            });
            res.send(posts);
        } catch (e) {
            res.status(500).json({
                error: e.message,
            });
        }
    }

    static async getPosts(req, res) {
        try {
            const posts = await Post.find().populate("owner").sort({ createdAt: -1 });
            res.json(posts);
        } catch (err) {
            res.status(500).send("Server Error");
        }
    }

    static async getPostById(req, res) {
        const _id = req.params.id;
        try {
            const post = await Post.findOne({
                _id,
                owner: req.user._id,
            });
            if (!post) {
                return res.status(404).send();
            }
            res.send(post);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    static async updatePost(req, res) {
        const updates = Object.keys(req.body);
        const canUpdate = ["caption"];
        const isValidUpdate = updates.every((value) =>
            canUpdate.includes(value)
        );

        if (!isValidUpdate) {
            return res.status(400).send({ error: "Invalid updates" });
        }
        try {
            const post = await Post.findOne({
                _id: req.params.id,
                owner: req.user._id,
            });
            if (!post) {
                return res.status(404).send();
            }
            updates.forEach((update) => (post[update] = req.body[update]));
            await post.save();
            res.send(post);
        } catch (err) {
            res.status(400).send(err);
        }
    }

    static async deletePost(req, res) {
        try {
            const post = await Post.findOneAndDelete({
                _id: req.params.id,
                owner: req.user._id,
            });
            if (!post) {
                return res.status(404).send();
            }
            res.send({
                deletedData: post,
                result: "successfully deleted",
            });
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
}



/*


// @route    PUT api/posts/like/:id
// @desc     Like a post
// @access   Private
router.put('/like/:id', [auth, checkObjectId('id')], async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
  
      // Check if the post has already been liked
      if (post.likes.some(like => like.user.toString() === req.user.id)) {
        return res.status(400).json({ msg: 'Post already liked' });
      }
  
      post.likes.unshift({ user: req.user.id });
  
      await post.save();
  
      return res.json(post.likes);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
  
  // @route    PUT api/posts/unlike/:id
  // @desc     Unlike a post
  // @access   Private
  router.put('/unlike/:id', [auth, checkObjectId('id')], async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
  
      // Check if the post has not yet been liked
      if (!post.likes.some(like => like.user.toString() === req.user.id)) {
        return res.status(400).json({ msg: 'Post has not yet been liked' });
      }
  
      // remove the like
      post.likes = post.likes.filter(
        ({ user }) => user.toString() !== req.user.id
      );
  
      await post.save();
  
      return res.json(post.likes);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
  
  // @route    POST api/posts/comment/:id
  // @desc     Comment on a post
  // @access   Private
  router.post(
    '/comment/:id',
    [
      auth,
      checkObjectId('id'),
      [check('text', 'Text is required').not().isEmpty()]
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      try {
        const user = await User.findById(req.user.id).select('-password');
        const post = await Post.findById(req.params.id);
  
        const newComment = {
          text: req.body.text,
          name: user.name,
          avatar: user.avatar,
          user: req.user.id
        };
  
        post.comments.unshift(newComment);
  
        await post.save();
  
        res.json(post.comments);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );
  
  // @route    DELETE api/posts/comment/:id/:comment_id
  // @desc     Delete comment
  // @access   Private
  router.delete('/comment/:id/:comment_id', auth, async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
  
      // Pull out comment
      const comment = post.comments.find(
        comment => comment.id === req.params.comment_id
      );
      // Make sure comment exists
      if (!comment) {
        return res.status(404).json({ msg: 'Comment does not exist' });
      }
      // Check user
      if (comment.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'User not authorized' });
      }
  
      post.comments = post.comments.filter(
        ({ id }) => id !== req.params.comment_id
      );
  
      await post.save();
  
      return res.json(post.comments);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
  });

  */