import { FastifyInstance, FastifyPluginOptions } from "fastify";
import {
    deleteTasks,
    getTask,
    getTasks,
    postTasks,
    updatedTask,
} from "./controllers/tasks-controller";
import middleValidateTask from "./middlewares/middleValidateTask";

export async function route(
    fastify: FastifyInstance,
    opitions: FastifyPluginOptions
) {
    fastify.get("/tasks", getTasks);

    fastify.get("/tasks/:id", getTask);

    fastify.post("/tasks", { preHandler: [middleValidateTask] }, postTasks);

    fastify.delete("/tasks/:id", deleteTasks);

    fastify.put("/tasks/:id", updatedTask);
}
