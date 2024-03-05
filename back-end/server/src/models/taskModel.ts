import { create } from "domain";
import { connect } from "../database";
import Tasks from "../types/tasks";

// model user

export const getTasksByUserBD = async (id: string) => {
    const tasks = await connect();
    const [result] = await tasks.query(
        "SELECT * FROM tasks WHERE user_id = ?",
        [id]
    );
    return result;
};

export const createTaskByUserBD = async (task: Tasks, id: string) => {
    const conn = await connect();
    const [result] = await conn.query("INSERT INTO tasks SET ?", {
        ...task,
        user_id: id,
    });
    return result;
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
