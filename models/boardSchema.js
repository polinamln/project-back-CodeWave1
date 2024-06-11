import mongoose from "mongoose"

const boardSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: [true, "Set title for board"],
    },
    icon: {
        type: String,
        default: "Cube",
        required: [true, "Set icon for board"]
    },
    background: {
        type: String,
        ref: "background",
        default: "None",
        required: [true, "Set background for board"]
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", 
    }
    }, {
        versionKey: false, timestamps: true
    });


export default mongoose.model("Board", boardSchema);