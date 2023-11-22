import fastify from 'fastify'
import AvicultorSrv from './src/AvicultorSrv.js'
const server = fastify()

const Avicultor = AvicultorSrv
Avicultor(server)

//server.get('/', (req,res) =>{
  //  server.login
//})

server.listen({
    host: '0.0.0.0',
    port: process.env.PORT ?? 3333,
})

