import { Pool } from 'pg'

const configForDataBase = {
  database: 'postgres',
  user: 'postgres',
  host: 'localhost',
  port: 5432,
  password: dbSecret,
}

const configForTable = {
  database: 'direct_chat',
  user: 'postgres',
  host: 'localhost',
  port: 5432,
  password: dbSecret,
}

export const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
})
