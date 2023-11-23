import {sql} from '../db.js'


export default (server) => {
    
    server.get('/avicultores', async (search) =>{
        let avicultores
        if (search) {

            avicultores = await sql`SELECT * FROM avicultores where nome ilike ${'%'+ search + '%'}`
        
        } else {

            avicultores = await sql`SELECT * FROM avicultores`

        }

        return avicultores
        
    })
    
    server.post('/avicultores', async (request, reply) =>{
        const {nome, email, senha} = request.body

        await sql`insert into avicultores(nome, email, senha) VALUES (${nome}, ${email}, ${senha})`
    
        return reply.status(201).send()
    })
    
    server.put('/avicultores/:id', async (request, reply) =>{
        const avicultorId = request.params.id
        const {nome, email, senha} = request.body
    
        await sql`update avicultores set nome = ${nome}, email = ${email}, senha = ${senha} WHERE id = ${id}`
    
        return reply.status(204).send()
    })
    
    server.delete('/avicultores/:id', async (request, reply) =>{
        const avicultorId = request.params.id
    
        await database.delete(avicultorId)
    
        return reply.status(204).send()
    })

}

