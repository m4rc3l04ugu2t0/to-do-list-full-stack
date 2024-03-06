import axios from "axios";
import { PropTasks } from "../types/tasksTypes";
import { User } from "../types/userTypes";

const BASE_URL = "http://localhost:3000/user";
const userId = localStorage.getItem("userId");

export const getIdUser = async () => {
    const response = await axios<User[]>(BASE_URL);
    return await response.data.map((userId: User) => userId.id);
};

export const getUser = async () => {
    const response = await axios(BASE_URL);
    const data = await response.data;
    return data;
};

export const getUserByTasks = async () => {
    const response = await axios(`${BASE_URL}/${userId}/tasks`);
    return await response.data;
};

export const createUser = async (data: User) => {
    const response = await axios.post(BASE_URL, data);
    localStorage.setItem("userId", await response.data.insertId);
    return await response.data;
};

export const createTask = async (data: PropTasks) => {
    const response = await axios.post(`${BASE_URL}/${userId}/tasks`, data);
    return await response.data;
};

export const deleteUser = async (id: string) => {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return await response.data;
};

export const updateTask = async (data: {
    id: string;
    title: string;
    description: string;
}) => {
    console.log(data.id);
    await axios.put(`${BASE_URL}/${userId}/task/${data.id}`, data);
};

export const deleteTask = async (id: string) => {
    const response = await axios.delete(`${BASE_URL}/${userId}/task/${id}`);
    return await response.data;
};
