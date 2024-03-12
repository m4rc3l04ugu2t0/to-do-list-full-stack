import { FastifyReply, FastifyRequest } from "fastify";
import {
    createUserBD,
    deleteUserBD,
    getUsersBD,
    usersBD,
} from "../models/userModel";
import { User } from "../types/user";

export const user = async (request: FastifyRequest, reply: FastifyReply) => {
    const { email, password } = request.body as {
        email: string;
        password: string;
    };
    const user = await usersBD(email, password);

    if (Array.isArray(user) && user.length === 0) {
        return reply.status(404).send({ message: "User not found" });
    }

    return reply.status(200).send(user);
};
export const getUsers = async (
    request: FastifyRequest,
    reply: FastifyReply
) => {
    const users = await getUsersBD();
    return reply.status(200).send(users);
};

export const postUser = async (
    request: FastifyRequest,
    reply: FastifyReply
) => {
    const data = request.body as User;
    const user = await createUserBD(data);
    return reply.status(201).send(user);
};

export const deleteUser = async (
    request: FastifyRequest,
    reply: FastifyReply
) => {
    const { id } = request.params as { id: string };
    const user = await deleteUserBD(id);
    return reply.status(204).send({ message: "User deleted" });
};
