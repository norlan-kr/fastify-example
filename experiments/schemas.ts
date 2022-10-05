const get = {
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

const post = {
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

export {get, post}