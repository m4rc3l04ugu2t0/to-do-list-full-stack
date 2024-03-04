import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { getTasks, postTasks } from "./controllers/tasks-controller";

export async function route(
    fastify: FastifyInstance,
    opitions: FastifyPluginOptions
) {
    fastify.get("/tasks", getTasks);

    fastify.post("/tasks", postTasks);
}
