const express = require("express");
const TaskModel = require("./src/model/tasksModel");
const router = express.Router();

router.get("/tasks", async (req, res) => {
    try {
        const tasks = await TaskModel.getAllTasks();
        console.log(tasks);
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/tasks/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const task = await TaskModel.getTaskById(id);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post("/tasks", async (req, res) => {
    try {
        const { title, description, created, updated, done } = req.body;
        const newTask = new TaskModel({
            title,
            description,
            created,
            updated,
            done,
        }); // Cria uma nova instância do modelo Task
        await newTask.createNewTask(); // Salva a nova task no banco de dados
        res.status(201).json(newTask); // Retorna a nova task como resposta com status 201 (Created)
    } catch (error) {
        console.error("Erro ao criar uma nova task:", error);
        res.status(500).json({ message: "Erro ao criar uma nova task" });
    }
});

router.delete("/tasks/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTask = await TaskModel.deleteTask(id);
        res.status(200).json(deletedTask);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
module.exports = router;
