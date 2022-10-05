import {FastifyInstance, RouteShorthandOptions} from "fastify";
import {post, get} from "./schemas";

export default async function (fastify: FastifyInstance, opts: RouteShorthandOptions) {
    fastify.get('/ping', {schema: get}, (request, reply) => {
        return {pong: 'GET worked'}
    })

    fastify.post('/ping', {schema: post}, (request, reply) => {
        return {pong: 'POST worked'}
    })
}