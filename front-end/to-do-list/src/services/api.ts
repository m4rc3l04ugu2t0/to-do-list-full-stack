import axios from "axios";
import { PropTasks } from "../types/tasksTypes";

const BASE_URL = "http://localhost:8080/tasks/";

export const getIdTasks = async () => {
    const response = await axios<PropTasks[]>(BASE_URL);
    return await response.data.map((post: PropTasks) => post._id);
};

export const getTasks = async (id: string) => {
    const response = await axios(`${BASE_URL}${id}`);

    return await response.data;
};

export const createTask = async (data: PropTasks) => {
    const response = await axios.post(BASE_URL, data);
    return await response.data;
};

export const updateTask = async (data: PropTasks) => {
    await axios.put(`${BASE_URL}${data._id}`, data);
};

export const deleteTask = async (id: string) => {
    const response = await axios.delete(`${BASE_URL}${id}`);
    return await response.data;
};
