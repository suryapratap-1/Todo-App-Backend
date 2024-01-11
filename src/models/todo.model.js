import mongoose, { Schema } from "mongoose";

const TodoSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            maxLength: 50,
        },
        description: {
            type: String,
            required: true,
        }
    }, 
    { 
        timestamps: true 
    }
)

export const Todo = mongoose.model("Todo", TodoSchema);