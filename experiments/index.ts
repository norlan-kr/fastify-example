import {FastifyInstance, RouteShorthandOptions} from "fastify";

export default async function (fastify: FastifyInstance, opts: RouteShorthandOptions) {
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

    fastify.get('/ping', options, (request, reply) => {
        return {pong: 'it worked'}
    })
}