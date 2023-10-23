import { randomUUID } from "node:crypto"
import { sql } from "./db.js";

export class DatabasePostgres{
    #avicultores = new Map()

    async list( search) {
        let avicultores 

        if(search){
            avicultores = await sql`select * from avicultores where nome "%search%"`
          
        }else{
            avicultores = await sql`select * from avicultores`
        }
    }
    async create(avicultor) {

        const {nome, email, senha} = avicultor

        await sql`insert into avicultores(nome, email, senha) VALUES (${nome}, ${email}, ${senha})`

    }

    update(id, avicultor) {
        this.#avicultores.set(id, avicultor)
    }

    delete(id){
        this.#avicultores.delete(id)
    }
}