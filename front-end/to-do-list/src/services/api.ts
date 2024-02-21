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
