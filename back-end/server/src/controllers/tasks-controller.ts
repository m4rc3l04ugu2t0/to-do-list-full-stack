import { FastifyReply, FastifyRequest } from "fastify";
import Tasks from "../types/tasks";
import {
    createTaskBD,
    getTasksBD,
    getTaskBD,
    deleteTaskBD,
    updatedTaskBD,
} from "../models/taskModel";
import { request } from "http";

export const getTasks = async (
    request: FastifyRequest,
    reply: FastifyReply
) => {
    const tasks = await getTasksBD();

    return reply.status(200).send(tasks);
};

export const getTask = async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = request.params as { id: string };
    console.log("id:", id);
    const task = await getTaskBD(id);
    return reply.status(200).send(task);
};

export const postTasks = async (
    request: FastifyRequest,
    reply: FastifyReply
) => {
    const data: Tasks = request.body as Tasks;
    console.log(data);
    const task = await createTaskBD(data);

    return reply.status(201).send(task);
};

export const deleteTasks = async (
    request: FastifyRequest,
    reply: FastifyReply
) => {
    const { id } = request.params as { id: string };
    const task = await deleteTaskBD(id);
    return reply.status(204).send({ message: "Task deleted" });
};

export const updatedTask = async (
    request: FastifyRequest,
    reply: FastifyReply
) => {
    const { id } = request.params as { id: string };
    const data: Tasks = request.body as Tasks;
    const task = await updatedTaskBD(id, data);
    return reply.status(204).send({ message: "Task updated" });
};
