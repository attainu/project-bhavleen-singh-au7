import User from "../models/user";

class UserControl {
  static async userProfile(req, res) {
    res.send(req.user);
  }

  static async checkForUsername(req, res) {
    let user = await User.findOne({
      username: req.body.username,
    });
    if (user) {
      return res.status(200).json({
        statusCode: 200,
        message: "Username exists",
        result: true,
        error: "",
      });
    }
    res.status(200).json({
      statusCode: 200,
      message: "Username doesn't exist",
      result: false,
      error: "",
    });
  }

  static async updateUserProfile(req, res) {
    const updates = Object.keys(req.body);
    const allowedUpdates = [
      "name",
      "email",
      "username",
      "password",
      "age",
      "contact",
      "bio",
    ];
    //check for available username in front end
    const isvalidOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    );
    if (!isvalidOperation) {
      return res
        .status(400)
        .send({ error: "Invalid updates" });
    }
    try {
      updates.forEach(
        (update) => (req.user[update] = req.body[update])
      );
      await req.user.save();
      res.json({
        profile: req.user,
        Result: "Updated Successfully",
      });
    } catch (e) {
      // validation failure
      res.status(400).json({
        error: e.message,
      });
    }
  }

  static async deleteUserProfile(req, res) {
    try {
      await req.user.remove(); //can also use findbyidanddelete
      // sendCancellationEmail(req.user.email, req.user.name);
      res.status(200).json({ message: "User Deleted" });
    } catch (err) {
      res.status(500).json({
        error: "Server Error",
      });
    }
  }
}

export default UserControl;
