import { Todo } from "../models/todo.model.js";

export const updateTodo = async (req, res) => {
    try {
        const { id } = req.params
        const { title, description } = req.body
        const todo = await Todo.findByIdAndUpdate(
            { _id: id },
            { title: title, description: description }
        )

        res.status(200).json({
            success: true,
            data: todo,
            message: "Updated Todo successfully",
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