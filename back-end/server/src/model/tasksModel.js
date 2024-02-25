const mongoose = require("mongoose");

const tasksSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    created: { type: Date, default: Date.toString() },
    updated: { type: Date, default: Date.toString() },
    done: { type: Boolean, default: false },
});

const tasksModel = mongoose.model("tasks", tasksSchema);

class ClassTaskModel {
    constructor({ title, description, created, updated, done }) {
        this.title = title;
        this.description = description;
        this.created = created;
        this.updated = updated;
        this.done = done;
    }

    static async getAllTasks() {
        const tasks = await tasksModel.find();
        return tasks;
    }

    static async getTaskById(id) {
        const task = await tasksModel.findOne({ _id: id });
        return task;
    }

    async createNewTask() {
        await tasksModel.create({
            title: this.title,
            description: this.description,
            created: this.created,
            updated: this.updated,
            done: this.done,
        });
    }

    static async updateTask(id, title, description, created, updated, done) {
        const updatedTask = await tasksModel.updateOne(
            { _id: id },
            {
                title: title,
                description: description,
                created: created,
                updated: updated,
                done: done,
            }
        );
        return updatedTask;
    }

    static async deleteTask(id) {
        await tasksModel.deleteOne({ _id: id });
    }
}

module.exports = ClassTaskModel;
