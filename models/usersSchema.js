import mongoose from "mongoose";
import { Schema } from "mongoose";

const usersSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    avatarURL: String,
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false }
);

export default mongoose.model("User", usersSchema);
