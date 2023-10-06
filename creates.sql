create table avicultores(
	id_avicultor serial primary key,
	nome varchar(200) not null,
	email varchar(100) not null,
	senha varchar(20) not null
);

create table galpoes(
	id_galpao serial primary key,
	nome varchar(10) not null, --ex: galpão 1--
	dono integer references avicultores(id_avicultor)
);

create table lotes(
	id_lote serial primary key,
	cod integer not null,
	galpao integer references galpoes(id_galpao),
	aviculor integer references avicultores(id_avicultor)
);

 

create table semanas(
	id_semana serial primary key,
	semana numeric(1),
	lote integer references lotes(id_lote),
	galpão integer references galpoes(id_galpao)
);

