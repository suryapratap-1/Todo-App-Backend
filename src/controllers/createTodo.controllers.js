import { Todo } from "../models/todo.model.js";

export const createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const response = await Todo.create({ title, description })
        res.status(200).json({
            success: true,
            data: response,
            message: "Entry successful"
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