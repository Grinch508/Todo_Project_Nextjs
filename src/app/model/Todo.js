import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: false
    },

    todo: {
        type: String,
        required: true,
        unique: false
    }
}, {timestamp: true})

const Todo = mongoose.models.Todo || mongoose.model("Todo", todoSchema)

export default Todo