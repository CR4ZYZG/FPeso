import { fastify } from 'fastify'

const server = fastify()

server.get('/', () =>{
    return 'hello server'
})

server.get('/node', () =>{
    return 'hello node'
})

server.listen({
    port: 3333
})

