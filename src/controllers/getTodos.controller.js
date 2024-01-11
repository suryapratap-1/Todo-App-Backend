import { Todo } from "../models/todo.model.js";

export const getTodos = async (req, res) => {
    try {
        const Todos = await Todo.find({})
        res.status(200).json({
            success: true,
            data: Todos,
            message: "Fetched all Todos successfully",
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            data: error.message,
            message: "Internal server error",
        })
    }
}