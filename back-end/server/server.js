import "dotenv/config";
import { fastify } from "fastify";
import { DataBase } from "./database.js";
import { DataBasePostgres } from "./database-postgres.js";

const server = fastify();

const database = new DataBasePostgres();

server.get("/user", (request) => {
    const search = request.query.search;

    const user = database.list(search);

    return user;
});

server.post("/user", (request, reply) => {
    const { name, email } = request.body;

    database.create({
        name,
        email,
    });

    return reply.status(201).send();
});

server.put("/user/:id", (request, reply) => {
    const userID = request.params.id;
    const { id, name, email } = request.body;

    database.update(userID, {
        id,
        name,
        email,
    });

    return reply.status(204).send();
});

server.delete("/user/:id", (request, reply) => {
    const userId = request.params.id;

    database.delete(userId);

    return reply.status(204).send();
});

server.listen({
    port: 3333,
});
