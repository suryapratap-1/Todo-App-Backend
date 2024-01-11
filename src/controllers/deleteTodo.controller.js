import { Todo } from "../models/todo.model.js";

export const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params
        const todo = await Todo.findByIdAndDelete({ _id: id })

        res.status(200).json({
            success: true,
            data: todo,
            message: "Deleted Todo successfully",
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