import mysql, { Pool } from 'mysql2/promise';
import { Express } from 'express';

let pool: Pool;

export async function connectToDatabase(app: Express): Promise<Pool> {
  try {
    const dbConfig = {
      host: process.env.MYSQL_HOST || 'db4free.net',
      user: process.env.MYSQL_USER || 'seu_usuario',
      password: process.env.MYSQL_PASSWORD || 'sua_senha',
      database: process.env.MYSQL_DATABASE || 'seu_banco',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    };

    pool = mysql.createPool(dbConfig);

    const connection = await pool.getConnection();
    console.log('Conectado ao MySQL!');
    connection.release();

    app.locals.db = pool;

    return pool;
  } catch (error) {
    console.error('Falha ao conectar ao MySQL', error);
    process.exit(1);
  }
}

export { pool as db }; // db: Pool
