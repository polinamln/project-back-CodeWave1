import mongoose from "mongoose";

const columnSchema = new mongoose.Schema ({
title: {
    type: String,
    required: [true, "Set title for colum"],
},
board: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Board',
    required: true,
},
owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
}
}, {
    versionKey: false, timestamps: true
});

export default mongoose.model("Column", columnSchema);