import mongoose from "mongoose";
const cardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High", "Without"],
      default: "Low",
    },
    deadline: { type: Date },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    board: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Board",
      required: true,
    },
    column: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Column",
      required: true,
    },
  },

  { versionKey: false, timestamps: true }
);
export default mongoose.model("Card", cardSchema);
