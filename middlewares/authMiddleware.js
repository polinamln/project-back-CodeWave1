import jwt from "jsonwebtoken";
import User from "../models/usersSchema.js";

function auth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Not authorized!" });
  }

  const [bearer, token] = authHeader.split(" ");

  if (bearer !== "Bearer" || !token) {
    return res.status(401).json({ message: "Not authorized!" });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Not authorized!" });
    }

    try {
      const user = await User.findById(decoded.id);

      if (!user || user.token !== token) {
        return res.status(401).json({ message: "Not authorized!" });
      }

      req.user = {
        id: user._id,
        email: user.email,
      };

      next();
    } catch (e) {
      next(e);
    }
  });
}

export default auth;
