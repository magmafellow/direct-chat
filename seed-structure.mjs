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

async function createDataBase() {
  const pool = new pg.Pool(configForDataBase)

  try {
    console.log(info('trying to create db'))
    await pool.query('CREATE DATABASE direct_chat')
    console.log(success('finished creating db'))
  } catch (error) {
    console.log(err('failed to create direct_chat database'), info('-> probably database already exists'))
  } finally {
    await pool.end()
  }
}

async function createUsers() {
  const pool = new pg.Pool(configForTable)

  try {
    console.log(info('trying to create users table'))
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        user_id SERIAL PRIMARY KEY,
        username VARCHAR(20) NOT NULL UNIQUE,
        password VARCHAR(20) NOT NULL,
        first_name VARCHAR(20),
        last_name VARCHAR(20),
        phone VARCHAR(20),
        email VARCHAR(35),
        dateofbirth DATE NOT NULL default NOW()::DATE,
        time_created TIMESTAMP default NOW()
      )
    
    `)
    console.log(success('finished creating users table'))
  } catch (error) {
    console.log(err('failed to create users table'))
    throw error
  } finally {
    await pool.end()
  }
}

async function createChats() {
  const pool = new pg.Pool(configForTable)

  try {
    console.log(info('trying to create chats table'))
    await pool.query(`
      CREATE TABLE IF NOT EXISTS chats (
      chat_id SERIAL PRIMARY KEY,
      name VARCHAR(30) NOT NULL,
      time_created TIMESTAMP default NOW()
    )
    `)
    console.log(success('finished creating chats table'))
  } catch (error) {
    console.log(err('failed to create chats table'))
    throw error
  } finally {
    await pool.end()
  }
}

async function createRoles() {
  const pool = new pg.Pool(configForTable)

  try {
    console.log(info('trying to create roles table'))
    await pool.query(`
      CREATE TABLE IF NOT EXISTS roles (
        role_id SERIAL PRIMARY KEY,
        name VARCHAR(12) NOT NULL,
        description VARCHAR(200)
      )
    `)
    console.log(success('finished creating roles table'))
  } catch (error) {
    console.log(err('failed to create roles table'))
    throw error
  } finally {
    await pool.end()
  }
}

async function createUsersChats() {
  const pool = new pg.Pool(configForTable)

  try {
    console.log(info('trying to create users_chats table'))
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users_chats (
        user_id INTEGER REFERENCES users (user_id) ON DELETE CASCADE,
        chat_id INTEGER REFERENCES chats (chat_id) ON DELETE CASCADE,
        isOwner BOOLEAN NOT NULL default FALSE,
        role INTEGER REFERENCES roles (role_id) default 1,
        PRIMARY KEY (user_id, chat_id)
      )
    `)
    console.log(success('finished creating users_chats table'))
  } catch (error) {
    console.log(err('failed to create users_cahts table'))
  } finally {
    await pool.end()
  }
}

async function createMessages() {
  const pool = new pg.Pool(configForTable)

  try {
    console.log(info('trying to create messages table'))
    await pool.query(`
      CREATE TABLE IF NOT EXISTS messages (
        message_id SERIAL,
        user_id INTEGER REFERENCES users (user_id) ON DELETE CASCADE,
        chat_id INTEGER REFERENCES chats (chat_id) ON DELETE CASCADE,
        content TEXT NOT NULL,
        time_created TIMESTAMP default NOW(),
        PRIMARY KEY (message_id, user_id, chat_id)
      )
    `)
    console.log(success('finished creating messages table'))
  } catch (error) {
    console.log(err('failed to create messages table'))
    throw error
  } finally {
    await pool.end()
  }
}

async function createRequests(){
  const pool = new pg.Pool(configForTable)
  
  try {
    console.log( info('trying to create requests table') )
    const r = pool.query(`
      CREATE TABLE IF NOT EXISTS requests (
        request_id SERIAL PRIMARY KEY,
        by_who INTEGER REFERENCES users (user_id) ON DELETE SET NULL,
        to_whom INTEGER REFERENCES users (user_id) ON DELETE SET NULL,
        to_where INTEGER REFERENCES chats (chat_id) ON DELETE CASCADE,
        offered_role INTEGER REFERENCES roles (role_id) ON DELETE SET NULL,
        time_created TIMESTAMP default NOW()
      )
    `)
    console.log( success('finished creating requests table') )
  } catch (error) {
    console.log( err('failed to create requests table') )
  } finally {
    await pool.end()
  }
}

async function main() {
  await createDataBase()
  await createUsers()
  await createChats()
  await createRoles()
  await createUsersChats()
  await createMessages()
  await createRequests()
  console.log(success('---===DONE===---'))
}

main()
