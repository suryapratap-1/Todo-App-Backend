import { Todo } from "../models/todo.model.js";

export const getSingleTodo = async (req, res) => {
    try {
        const { id } = req.params
        const todo = await Todo.findById({ _id: id })

        if(!todo) {
            return res.status(404).json({
                success: false,
                message: "No such data found"
            })
        }

        res.status(200).json({
            success: true,
            data: todo,
            message: "Fetched Todo successfully",
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