import axios from "axios";
import { PropTasks } from "../types/tasksTypes";
import { User } from "../types/userTypes";

const BASE_URL = "http://localhost:3000/user";
const userId = localStorage.getItem("userId");

export const getIdUser = async () => {
    const response = await axios<User[]>(BASE_URL);
    return await response.data.map((userId: User) => userId.id);
};

export const getUser = async (userData: User) => {
    const response = await axios.post(`${BASE_URL}/login`, userData);
    const data = await response.data;
    localStorage.setItem("userId", data[0].id);
    return data;
};

export const getUserByTasks = async (id: string | undefined) => {
    if (!id) return [1];
    const response = await axios(`${BASE_URL}/${id}/tasks`);
    return await response.data;
};

export const createUser = async (data: User) => {
    const response = await axios.post(BASE_URL, data);
    localStorage.setItem("userId", await response.data.insertId);
    return await response.data;
};

export const createTask = async (data: PropTasks, id: string) => {
    const response = await axios.post(`${BASE_URL}/${id}/tasks`, data);
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
