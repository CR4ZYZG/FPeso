--drop table avicultores cascade;
--drop table galpoes cascade;
--drop table lotes cascade;
--drop table tecnicos cascade;
--drop table semanas cascade;
	


create table avicultores(
	id serial primary key,
	nome varchar(200) not null,
	email varchar(100) not null,
	senha varchar(20) not null
);

create table galpoes(
	id serial primary key,
	nome varchar(10) not null, --ex: galpão 1--
	dono integer references avicultores(id)
);

create table lotes(
	id serial primary key,
	cod integer not null,
	galpao integer references galpoes(id),
	aviculor integer references avicultores(id)
);

create table tecnicos(
	id serial primary key,
	nome varchar(200) not null,
	email varchar(100) not null,
	senha varchar(20) not null
);

create table semanas(
	id serial primary key,
	semana numeric(1),
	lote integer references lotes(id),
	galpão integer references galpoes(id)
);

