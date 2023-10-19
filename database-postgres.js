import { randomUUID } from "node:crypto"

export class DatabasePostgres{
    #avicultores = new Map()

    list( search) {
        const avicultores

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