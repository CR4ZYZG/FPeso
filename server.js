import { fastify } from 'fastify'
import { DatabaseMemory } from './database-memory.js'
const server = fastify()

const database = new DatabaseMemory()

server.get('/avicultores', (request, reply) =>{
    const avicultores = database.list()

    return avicultores
})

server.post('/avicultores', (request, reply) =>{
    const {nome, email, senha} = request.body

    database.create({
        nome,
        email,
        senha,
    })

    return reply.status(201).send()
})

server.put('/avicultores/:id', (request, reply) =>{
    const {nome, email, senha} = request.body

    const avicultorId = request.params.id

    database.update(avicultorId, {
        nome,
        email,
        senha,
    })

    return reply.status(204).send()
})

server.delete('/avicultores/:id', (request, reply) =>{
    
})

server.listen({
    port: 3333
})

