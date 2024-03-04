import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { getTask, getTasks, postTasks } from "./controllers/tasks-controller";
import middleValidateTask from "./middlewares/middleValidateTask";

export async function route(
    fastify: FastifyInstance,
    opitions: FastifyPluginOptions
) {
    fastify.get("/tasks", getTasks);

    fastify.get("/tasks/:id", getTask);

    fastify.post("/tasks", { preHandler: [middleValidateTask] }, postTasks);
}
