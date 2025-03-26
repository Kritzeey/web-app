import express from "express";
import { getTodos, postTodo, putTodo, deleteTodo } from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/", getTodos)
router.post("/", postTodo)
router.put("/:id", putTodo)
router.delete("/:id", deleteTodo)

export default router;