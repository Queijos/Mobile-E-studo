CREATE DATABASE e-studo;
USE e-studo;

CREATE TABLE cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    data_nasc DATE NOT NULL,
    genero ENUM('Masculino', 'Feminino', 'Outro') NOT NULL,
    senha VARCHAR(255) NOT NULL,
    UNIQUE (email),
    UNIQUE (telefone)
);