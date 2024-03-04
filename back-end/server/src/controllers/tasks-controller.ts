import { FastifyReply, FastifyRequest } from "fastify";
import Tasks from "../types/tasks";
import { createTaskBD, getTasksBD } from "../models/taskModel";

export const getTasks = async (
    request: FastifyRequest,
    reply: FastifyReply
) => {
    const tasks = await getTasksBD();

    return reply.status(200).send({ tasks });
};

export const postTasks = async (
    request: FastifyRequest,
    reply: FastifyReply
) => {
    const data: Tasks = request.body as Tasks;
    console.log(data);
    const task = await createTaskBD(data);

    return reply.status(201).send({ task });
};
