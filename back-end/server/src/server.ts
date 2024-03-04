import "dotenv/config";
import Fastify from "fastify";
import cors from "@fastify/cors";
import { route } from "./router";

const app = Fastify({ logger: true });

const port = parseInt(process.env.PORT ?? "3000");

const start = async () => {
    await app.register(cors);
    await app.register(route);

    try {
        await app.listen({ port: 3000 });
        console.log(`Server running on port ${typeof port}`);
    } catch (err) {
        process.exit(1);
    }
};

start();
