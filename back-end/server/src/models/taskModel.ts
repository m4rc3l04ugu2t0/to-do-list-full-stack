import { connect } from "../database";
import Tasks from "../types/tasks";

export const getTasksBD = async () => {
    const tasks = await connect();
    const [result] = await tasks.query("SELECT * FROM tasks");
    return result;
};

export const createTaskBD = async (task: Tasks) => {
    const dateUTC = new Date(Date.now()).toUTCString();
    const { title, description } = task;

    const taskFormat = {
        title,
        description,
        done: true,
    };
    const conn = await connect();
    return await conn.query("INSERT INTO tasks SET ?", [taskFormat]);
};
