import { app } from "./server";
import { UserRoutes } from "./routers/UserRouter/UserRouter";
import { TasksRoutes } from "./routers/TasksRouter/TasksRouter";

export async function routes() {
    app.register(UserRoutes);
    app.register(TasksRoutes);
}
