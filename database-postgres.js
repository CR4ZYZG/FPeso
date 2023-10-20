import { randomUUID } from "node:crypto"

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
        const avicultorId = randomUUID()

        const {nome, email, senha} = avicultor

        await sql`insert into avicultores(id, nome, email, senha) VALUES (${avicultorId}, ${nome}, ${email}, ${senha})`

        this.#avicultores.set(id, avicultor)
    }

    update(id, avicultor) {
        this.#avicultores.set(id, avicultor)
    }

    delete(id){
        this.#avicultores.delete(id)
    }
}