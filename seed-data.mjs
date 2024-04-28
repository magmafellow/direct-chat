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

async function insertUsers(){
  const pool = new pg.Pool(configForTable)
  
  try {
    console.log( info('trying to insert users') )
    await pool.query(`
      INSERT INTO users (username, password, first_name, last_name, phone, email) VALUES
      ('magma', 'magma1', 'alexei', 'romanov', '89269393457', 'magmafellow@gmail.com'),
      ('molch', 'oleg3', 'oleg', 'molchanov', '89269335588', 'molchanov@ya.ru'),
      ('parser', 'fastparser!', 'artem', 'potapov', '89269473149', 'potapov@mail.ru'),
      ('white horse', 'password:', 'sofia', 'verova', '89269274523', 'sofia@hot.com')
    `)
    console.log( success('finished inserting users') )
  } catch (error) {
    console.log( err('failed to insert users') )
    throw error
  } finally {
    await pool.end()
  }
}

async function insertChats() {
  const pool = new pg.Pool(configForTable)

  try {
    console.log( info('trying to insert chats') )
    await pool.query(`
      INSERT INTO chats (name) VALUES
      ('chat for us two'), ('all member chat'), ('i am alone'), ('secret chat')
    `)
    console.log( success('finished creating chats') )
  } catch (error) {
    console.log( err('failed to insert chats') )
    throw error
  } finally {
    await pool.end()
  }
}

async function insertRoles() {
  const pool = new pg.Pool(configForTable)

  try {
    console.log( info('trying to insert roles') )
    await pool.query(`
      INSERT INTO roles (name, description) VALUES
      ('participant', 'He can just message in chat'),
      ('moderator', 'He can do all kinds of activity except removing chat'),
      ('root', 'He is allowed to do all kinds of activity')
    `)
    console.log( success('finished inserting roles') )
  } catch (error) {
    console.log( err('failed to insert roles') )
    throw error
  } finally {
    await pool.end()
  }
  
}

async function insertUsersChats() {
  const pool = new pg.Pool(configForTable)

  try {
    console.log( info('trying to insert users_chats') )
    await pool.query(`
      INSERT INTO users_chats (user_id, chat_id, isowner, role) VALUES
      (1, 4, TRUE, 3), (2, 4, FALSE, 2), (1, 1, FALSE, 1), (4, 1, TRUE, 3),
      (3, 3, TRUE, 3), (1, 2, FALSE, 1), (2, 2, FALSE, 1), (3, 2, TRUE, 3),
      (4, 2, FALSE, 1)
    `)
    console.log( success('finished inserting users_chats') )
  } catch (error) {
   console.log( err('failed to insert users_chats') ) 
   throw error
  } finally {
    await pool.end()
  }

}

async function insertMessages(){
  const pool = new pg.Pool(configForTable)
  
  try {
    console.log( info('trying to insert messages') )
    await pool.query(`
      INSERT INTO messages (user_id, chat_id, content) VALUES
      (1, 4, 'glad to see you, oleg'), (2, 4, 'u too, meeting tonight'), (1, 4, 'OK'),
      (3, 2, 'Hello everyone!'), (1, 2, 'Hello!. What is new? I hope it is good')
    `)
    console.log( success('finished inserting messages') )
  } catch (error) {
    console.log( err('failed to insert messages') )
    throw error
  } finally {
    await pool.end()
  }
}

async function main() {
  // await insertUsers()
  // await insertChats()
  // await insertRoles()
  await insertUsersChats()
  await insertMessages()

  console.log( success('---===DONE===---') )
}

main()
