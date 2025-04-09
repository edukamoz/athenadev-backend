import { connectToDatabase, db } from './db'; // Importe as funções do seu db.js
import { Express } from 'express';

async function initializeDatabase(app: Express) {
    try {
        // Garante que a conexão com o banco de dados foi estabelecida
        await connectToDatabase(app);

        // Define a query para criar a tabela se ela não existir
        const createTableQuery = `
      CREATE TABLE IF NOT EXISTS municipios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        codigo_ibge INT NOT NULL UNIQUE,
        nome VARCHAR(255) NOT NULL,
        capital BOOLEAN NOT NULL DEFAULT FALSE,
        codigo_uf INT NOT NULL,
        longitude DECIMAL(10, 6) NOT NULL,
        latitude DECIMAL(10, 6) NOT NULL,        
        INDEX idx_codigo_ibge (codigo_ibge),
        INDEX idx_nome (nome)        
        ); 
    `;

        // Executa a query para criar a tabela
        const [results, fields] = await db.execute(createTableQuery); /*A razão pela qual eu incluí essa desestruturação ( const [results, fields] = ... ) mesmo sem usar as variáveis é porque o método execute da biblioteca mysql2/promise sempre retorna um array com dois elementos*/
        console.log('✅ Tabela "municipios" criada ou já existente.');

    } catch (error) {
        console.error('Erro ao criar ou verificar a tabela "municipios"', error);
    }
}

// Chame a função initializeDatabase após a conexão com o banco de dados
export default initializeDatabase;