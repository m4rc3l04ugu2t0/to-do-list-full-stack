import {
    FastifyInstance,
    FastifyRequest,
    FastifyReply,
    FastifyPluginOptions,
} from "fastify";

export async function route(
    fastify: FastifyInstance,
    opitions: FastifyPluginOptions
) {
    fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
        return { hello: "world" };
    });
}
