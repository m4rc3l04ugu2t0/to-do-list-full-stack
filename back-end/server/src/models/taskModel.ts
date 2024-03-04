import { connect } from "../database";
import Tasks from "../types/tasks";

export const getTasksBD = async () => {
    const tasks = await connect();
    const [result] = await tasks.query("SELECT * FROM tasks");
    return result;
};

export const getTaskBD = async (id: string) => {
    const tasks = await connect();
    const [task] = await tasks.query("SELECT * FROM tasks WHERE id = ?", [id]);
    return task;
};

export const createTaskBD = async (task: Tasks) => {
    const { title, description } = task;

    const taskFormat = {
        title,
        description,
        done: true,
    };

    const conn = await connect();
    const [createdTask] = await conn.query(
        "INSERT INTO tasks SET ?",
        taskFormat
    );

    return createdTask;
};

export const deleteTaskBD = async (id: string) => {
    const conn = await connect();
    const [deleteTaskBD] = await conn.query("DELETE FROM tasks WHERE id = ?", [
        id,
    ]);
    return deleteTaskBD;
};

export const updatedTaskBD = async (id: string, task: Tasks) => {
    const conn = await connect();
    const [updatedTask] = await conn.query("UPDATE tasks SET ? WHERE id = ?", [
        task,
        id,
    ]);
    return updatedTask;
};
