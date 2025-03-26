import Todo from "../models/todo.model.js";

export async function getTodos(req, res) {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        console.error(error.message);
    }
}

export async function postTodo(req, res) {
    try {
        const todo = new Todo(req.body);
        await todo.save();
        res.json(todo);
    } catch (error) {
        console.error(error.message);
    }
}

export async function putTodo(req, res) {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(todo);
    } catch (error) {
        console.error(error.message);
    }
}

export async function deleteTodo(req, res) {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id)
        res.json(todo);
    } catch (error) {
        console.error(error.message);
    }
}