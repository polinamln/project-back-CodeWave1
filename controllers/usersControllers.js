import { createUserSchema } from "../schemas/userSchemas.js";
import { loginUserSchema } from "../schemas/userSchemas.js";
import { editUserSchema } from "../schemas/userSchemas.js";

editUserSchema;
import bcrypt from "bcrypt";
import User from "../models/usersSchema.js";
import gravatar from "gravatar";
import jwt from "jsonwebtoken";

export const userRegistration = async (req, res, next) => {
  const { email, password, userName } = req.body;

  try {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = await User.findOne({ email });
    if (user !== null) {
      res.status(409).json({ message: "Email in use" });
    }
    const avatarURL = gravatar.url(email, { s: "250", r: "pg" });

    const data = {
      userName,
      email: req.body.email,
      password: passwordHash,
      avatarURL,
    };

    const userData = createUserSchema.validate(data);

    if (userData.error) {
      return res.status(400).json(userData.error.message);
    }

    const registerUser = await User.create(userData.value);

    return res.status(201).json({
      user: {
        userName: registerUser.userName,
        email: registerUser.email,
        avatarURL: registerUser.avatarURL,
      },
    });
  } catch (e) {
    next(e);
  }
};

export const userLogin = async (req, res, next) => {
  const data = {
    email: req.body.email,
    password: req.body.password,
  };

  const userData = loginUserSchema.validate(data);
  if (userData.error) {
    return res.status(400).json(userData.error.message);
  }

  try {
    const user = await User.findOne({ email: userData.value.email });
    if (user === null) {
      res.status(401).json({ message: "Invalid email or password." });
    }

    const isMatch = await bcrypt.compare(data.password, user.password);
    if (isMatch === false) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "3d" }
    );

    await User.findByIdAndUpdate(user._id, { token }, { new: true });

    return res.status(200).json({
      token: token,
      user: {
        userName: user.userName,
        email: user.email,
      },
    });
  } catch (e) {
    next(e);
  }
};
export const userLogout = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, { token: null });
    res.status(204).end();
  } catch (e) {
    next(e);
  }
};
export const userEdit = async (req, res, next) => {
  const { id } = req.user;

  const data = {
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password,
  };

  try {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    const userData = editUserSchema.validate(data);
    if (userData.error) {
      return res.status(400).json(userData.error.message);
    }

    const user = await User.findByIdAndUpdate(id, userData.value, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(201).json({
      user: {
        userName: user.userName,
        email: user.email,
        avatarURL: user.avatarURL,
      },
    });
  } catch (e) {
    next(e);
  }
};
