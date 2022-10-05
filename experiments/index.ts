import {FastifyInstance, RouteShorthandOptions} from "fastify";
import {pongPost, pongGet} from "./schemas";

export default async function (fastify: FastifyInstance, opts: RouteShorthandOptions) {
    fastify.get('/ping', {schema: pongGet}, (request, reply) => {
        return {pong: 'GET worked'}
    })

    fastify.post('/ping', {schema: pongPost}, (request, reply) => {
        return {pong: 'POST worked'}
    })
}