import { FastifyCorsOptions } from "@fastify/cors";
import { FastifyInstance } from "fastify";
import {
    deleteTasks,
    getTasksByUser,
    createTaskByUser,
    updatedTask,
} from "../../controllers/tasks-controller";
import middleValidateTask from "../../middlewares/middleValidateTask";

export const TasksRoutes = async (
    fastify: FastifyInstance,
    options: FastifyCorsOptions
) => {
    fastify.get("/user/:id/tasks", getTasksByUser);

    fastify.post("/user/:id/tasks", createTaskByUser);

    fastify.delete("/tasks/:id", deleteTasks);

    fastify.put(
        "/tasks/:id",
        { preHandler: [middleValidateTask] },
        updatedTask
    );
};
