const pongGet = {
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

const pongPost = {
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

export {pongGet, pongPost}