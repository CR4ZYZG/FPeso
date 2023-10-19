import { randomUUID } from "node:crypto"

export class DatabasePostgres{
    #avicultores = new Map()

    list( search ) {
        return Array.from(this.#avicultores.entries()).map((avicultorArray) =>{
            const id = avicultorArray[0]
            const data = avicultorArray[1]

            return {
                id,
                ...data,
            }
        })
        .filter(avicultor => {
            if (search) {
                return avicultor.nome.includes(search)
            }

            return true
        })
            
    }

    create(avicultor) {
        const id = randomUUID()

        this.#avicultores.set(id, avicultor)
    }

    update(id, avicultor) {
        this.#avicultores.set(id, avicultor)
    }

    delete(id){
        this.#avicultores.delete(id)
    }
}