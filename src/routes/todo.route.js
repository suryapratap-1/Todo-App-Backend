import { Router } from "express";
export const router = Router();

import { createTodo } from "../controllers/createTodo.controllers.js";
import { getTodos } from "../controllers/getTodos.controller.js";
import { getSingleTodo } from "../controllers/getSingleTodo.controller.js";
import { deleteTodo } from "../controllers/deleteTodo.controller.js";
import { updateTodo } from "../controllers/updateTodo.controller.js";

// we can use both the syntax
// router.post("/createTodo", createTodo)
router.route("/createTodo").post(createTodo)
router.route("/getTodos").get(getTodos)
router.route("/getTodo/:id").get(getSingleTodo)
router.route("/updateTodo/:id").put(updateTodo)
router.route("/deleteTodo/:id").delete(deleteTodo)