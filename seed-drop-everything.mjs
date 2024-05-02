import pg from 'pg'
import { dbSecret } from './key.mjs'
import { err, success, info } from './colored.mjs'

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

async function dropDB(){
  const pool = new pg.Pool(configForDataBase)
  
  try {
    console.log( info('trying to drop direct_chat data base') )
    const r = await pool.query('DROP DATABASE direct_chat')
    console.log( success('finished dropping database') )
  } catch (error) {
    console.log( err('failed to drop database') )
  }
}

async function main(){
  await dropDB()
  console.log( info('---===DONE===---') )
}

main()
