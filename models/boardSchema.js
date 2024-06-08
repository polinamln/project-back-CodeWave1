import mongoose from "mongoose"

const boardSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: [true, "Set title for board"],
    },
    icon: {
        type: Number,
        default: 0,
        required: [true, "Set number for icon"]
    },
    background: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "background",
        required: [true, "Set background for board"]
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users", 
    }
    }, {
        versionKey: false
    });


export default mongoose.model("Board", boardSchema);