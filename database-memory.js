import { randomUUID } from "crypto"

export class DatabaseMemory{
    #avicultores = new Map()

    list() {
        return Array.from(this.#avicultores.entries()).map((avicultorArray) =>{
            const id = avicultorArray[0]
            const data = avicultorArray[1]

            return {
                id,
                ...data,
            }
        })
    }

    create(avicultor) {
        const id_avicultor = randomUUID()

        this.#avicultores.set(id_avicultor, avicultor)
    }

    update(id_avicultor, avicultor) {
        this.#avicultores.set(id_avicultor, avicultor)
    }

    delete(id_avicultor){
        this.#avicultores.delete(id_avicultor)
    }
}