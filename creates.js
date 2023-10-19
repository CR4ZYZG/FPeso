import { sql } from "./db.js";


sql`
create table avicultores(
	id serial primary key,
	nome varchar(200) not null,
	email varchar(100) not null,
	senha varchar(20) not null
);

`
.then(()=>{
    console.log('criado')
})