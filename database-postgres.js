import { sql } from "./db.js";

export class DatabasePostgres{
    

    async list(search) {
        let avicultores

        if (search){

            avicultores = await sql`SELECT * FROM avicultores where nome ilike ${'%'+ search + '%'}`

        } else {

            avicultores = await sql`SELECT * FROM avicultores`

        }
            return avicultores
        
    }

    async create(avicultor) {

        const {nome, email, senha} = avicultor

        await sql`insert into avicultores(nome, email, senha) VALUES (${nome}, ${email}, ${senha})`

    }
}