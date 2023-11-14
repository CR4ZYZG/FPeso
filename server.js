import { fastify } from 'fastify'
//import { DatabaseMemory } from './database-memory.js'
import { DatabasePostgres } from './database-postgres.js'
const server = fastify()


const database = new DatabasePostgres()


server.get('/avicultores', async (request) =>{
    const search = request.query.search
    
    const avicultores = await database.list(search)
    
    return avicultores
})

server.post('/avicultores', async (request, reply) =>{
    const {nome, email, senha} = request.body

    await database.create({
        nome,
        email,
        senha,
    })

    return reply.status(201).send()
})

server.put('/avicultores/:id', async (request, reply) =>{
    const {nome, email, senha} = request.body

    const avicultorId = request.params.id

    await database.update(avicultorId, {
        nome,
        email,
        senha,
    })

    return reply.status(204).send()
})

server.delete('/avicultores/:id', async (request, reply) =>{
    const avicultorId = request.params.id

    await database.delete(avicultorId)

    return reply.status(204).send()
})

server.listen({
    port: process.env.PORT ?? 3333,
})

