CREATE DATABASE IF NOT EXISTS fineFame;

USE fineFame;

DROP DATABASE fineFame;

CREATE TABLE IF NOT EXISTS fineFame.pessoa(
	cpf char(11) not null primary key unique,
    nome varchar(256) not null,
    email varchar(256) not null unique,
    senha varchar(15) not null
);

CREATE TABLE IF NOT EXISTS fineFame.cliente(
	id_cliente int not null primary key auto_increment unique,
    cpf_cliente char(11) not null unique,
    foreign key (cpf_cliente) references fineFame.pessoa(cpf)
);

CREATE TABLE IF NOT EXISTS fineFame.administrador(
	id_adm int not null primary key auto_increment unique,
    cpf_adm char(11) not null unique,
    foreign key (cpf_adm) references finefame.pessoa(cpf)
);

CREATE TABLE IF NOT EXISTS fineFame.quadro(
	id_obra int not null primary key auto_increment unique,
    nome varchar(256) not null,
    autor varchar(256) not null,
    valor_obra  decimal(10,2) not null
);

CREATE TABLE IF NOT EXISTS fineFame.carrinho(
	id_carrinho int not null primary key auto_increment unique,
    id_obra int not null,
    nome_carrinho varchar(256) not null,
    autor_carrinho varchar(256) not null,
    valor_carrinho decimal(10,2) not null,
    foreign key (id_obra) references fineFame.quadro(id_obra)
);

CREATE TABLE IF NOT EXISTS fineFame.pagamento(
	id_pagamento int not null primary key auto_increment unique,
    data_pagamento date not null,
    forma_pagamento varchar(50)
);


 

