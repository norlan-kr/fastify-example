const get = {
    querystring: {
        type: 'object',
        properties: {
            foo: {type: 'string'},
            bar: {type: 'string'}
        },
        required: ['foo']
    },
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
    body: {
        type: 'object',
        properties: {
            name: {type: 'string'},
            city: {type: 'string'}
        },
        required:['name']
    },
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