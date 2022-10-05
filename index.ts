import Fastify, {FastifyInstance, RouteShorthandOptions} from "fastify";
import {Server, IncomingMessage, ServerResponse} from "http";

const server: FastifyInstance = Fastify({})

const options: RouteShorthandOptions = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    pong: {
                        type: 'string'
                    }
                }
            }
        }
    }
}

server.get('/ping', options, (request, reply) => {
    return {pong: 'it worked'}
})

const start = async () => {
    try {
        await server.listen(({port: 3000}))
    } catch (err) {
        server.log.error(err)
        process.exit(1)
    }
}

start()