import { FastifyReply, FastifyRequest } from "fastify";
import { createUserBD } from "../models/userModel";
import { User } from "../types/user";

export const postUser = async (
    request: FastifyRequest,
    reply: FastifyReply
) => {
    const data = request.body as User;
    const user = await createUserBD(data);
    return reply.status(201).send(user);
};
