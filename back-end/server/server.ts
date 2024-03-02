import "dotenv/config";
import Fastify from "fastify";
import cors from "@fastify/cors";
import { route } from "./router";
// import { DataBase } from "./database.ts";
// import { DataBasePostgres } from "./database-postgres.ts";
// import { configDotenv } from "dotenv";

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

// const server = fastify();

// const database = new DataBasePostgres();

// server.get("/user", (request) => {
//     const search = request.query.search;

//     const user = database.list(search);

//     return user;
// });

// server.post("/user", (request, reply) => {
//     const { name, email } = request.body;

//     database.create({
//         name,
//         email,
//     });

//     return reply.status(201).send();
// });

// server.put("/user/:id", (request, reply) => {
//     const userID = request.params.id;
//     const { id, name, email } = request.body;

//     database.update(userID, {
//         id,
//         name,
//         email,
//     });

//     return reply.status(204).send();
// });

// server.delete("/user/:id", (request, reply) => {
//     const userId = request.params.id;

//     database.delete(userId);

//     return reply.status(204).send();
// });

// server.listen({
//     port: 3333,
// });
