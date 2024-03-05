import { FastifyCorsOptions } from "@fastify/cors";
import { FastifyInstance } from "fastify";
import { postUser } from "../../controllers/user-controller";

export const UserRoutes = async (
    fastify: FastifyInstance,
    options: FastifyCorsOptions
) => {
    // fastify.get("/users", getUsers);
    fastify.post("/user", postUser);
};
