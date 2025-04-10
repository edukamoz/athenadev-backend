import { connectToDatabase, db } from './db';
import { Express } from 'express';

async function initializeDatabase(app: Express) {
    try {
        // Garante que a conexão com o banco de dados foi estabelecida
        await connectToDatabase(app);

        // Define a query para criar a tabela se ela não existir
        const createTableQuery = `
        CREATE TABLE IF NOT EXISTS usuario (
            ID int identity (1,1) primary key,
            Email varchar (65),
            senha varchar (80),
            Nome varchar (50),
            pontuação int
        );
        CREATE TABLE IF NOT EXISTS Games (
            ID int identity (1,1) primary key,
            nome varchar (70),
            constraint ID_usugames foreign key (ID) references usuario(ID)
        );
        CREATE TABLE IF NOT EXISTS challenge (
            id int identity (1,1) primary key,
            Nivel int ,
            codigos varchar (800),
            constraint ID_usudesafios foreign key (id) references usuario(ID)
    )
        CREATE TABLE IF NOT EXISTS link (
            id int identity (1,1) primary key,
            link varchar (2000),
            id_desafio int
            constraint link_desalink foreign key (id_desafio) references challenge (ID));
    )
        CREATE TABLE IF NOT EXISTS imagens (
            id int identity (1,1) primary key,
            imagens varbinary (max),
            id_desafio int,
            constraint ID_desaimag foreign key (id_desafio) references challenge (id)
    )
        CREATE TABLE IF NOT EXISTS codigos (
            id int identity (1,1) primary key,
            codigos int,
            constraint ID_desacod foreign key (codigos) references challenge (id)
    )
        CREATE TABLE IF NOT EXISTS tutorials (
            id int identity (1,1) primary key,
            videos varchar(100),
            nivel int ,
            artigos varchar(100),
            tema varchar (3)
    )
        CREATE TABLE IF NOT EXISTS downloads (
            id int identity (1,1) primary key,
            tipo varchar (3),
            link varchar (2000)
    )
    `;

        // Executa a query para criar a tabela
        const [results, fields] = await db.execute(createTableQuery); /*A razão pela qual eu incluí essa desestruturação ( const [results, fields] = ... ) mesmo sem usar as variáveis é porque o método execute da biblioteca mysql2/promise sempre retorna um array com dois elementos*/
        console.log('✅ Tabelas criadas ou já existentes.');

    } catch (error) {
        console.error('Erro ao criar ou verificar as tabelas', error);
    }
}

// Chame a função initializeDatabase após a conexão com o banco de dados
export default initializeDatabase;