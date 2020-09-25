import User from '../models/user';

class UserAuthControl {

    static async signup (req, res) {
        try {
            //check if same email exists or not
            let userExists = await User.findOne({ email: req.body.email });
            if (userExists) {
                return res.status(406).json({
                    statusCode: 406,
                    error: 'Email already exists.',
                    message: ''
                });
            }
            const user = new User(req.body);
            await user.save();
            // sendWelcomeEmail(user.email, user.name);
            const token = await user.generateAuthToken();
            res.status(201).json({
                user,
                token,
                statusCode: 201,
                message: 'Sign Up successfully',
                error: ''
            });
        } catch (e) {
            res.status(400).json({
                statusCode: 400,
                error: e.message,
                message: ''
            });
        }
    }

    static async login (req, res) {
        try {
            const user = await User.findByCredentials(req.body.email, req.body.password);
            const token = await user.generateAuthToken();
            res.json({ user, token,
                statusCode: 200,
                message: 'Login Success',
                error: ''
            });
        } catch (e) {
            res.status(400).send({
                statusCode: 400,
                error: e.message,
                // error: 'Invalid Credentials',
                message: ''
            });
        }
    }

    static async logout (req, res) {
        try {
            req.user.tokens = req.user.tokens.filter((objToken) => {
                return objToken.token !== req.token; // [{id, token}, {id, token}..]
            });
            await req.user.save();
            res.status(200).json({
                statusCode: 200,
                message: "Logout successfully",
                error: ''
            });
        } catch (e) {
            res.status(500).json({
                statusCode: 500,
                error: 'Server Error',
                message: ''
            });
        }
    }

    static async logoutAll(req, res) {
        try {
            req.user.tokens = [];
            await req.user.save();
            res.status(200).json({
                statusCode: 200,
                message: "Logout successfully",
                error: ''
            });
        } catch (e) {
            res.status(500).json({
                statusCode: 500,
                error: 'Server Error',
                message: ''
            });
        }
    }

    
};

export default UserAuthControl