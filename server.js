import { createServer } from 'node:http'

const server = createServer(() =>{
    console.log('hello server')
})

server.listen(3333)

