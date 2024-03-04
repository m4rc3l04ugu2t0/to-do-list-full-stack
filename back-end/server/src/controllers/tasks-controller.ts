import { FastifyReply, FastifyRequest } from "fastify";
import Tasks from "../types/tasks";
import { createTaskBD, getTasksBD, getTaskBD } from "../models/taskModel";

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
