import Fastify, {FastifyInstance} from "fastify";
import experiments from "./experiments";

const server: FastifyInstance = Fastify({})

server.register(experiments)

const start = async () => {
    try {
        await server.listen(({port: 3000}))
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

start()