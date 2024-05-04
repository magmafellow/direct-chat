'use server'

import { dbSecret } from '@/key.mjs'
import { redirect } from 'next/navigation'
import pg from 'pg'

const { Pool } = pg

const pool = new Pool({
  database: 'direct_chat',
  user: 'postgres',
  host: 'localhost',
  port: 5432,
  password: dbSecret,
})

export async function accept(requestId: string){
  try {
    const r1 = await pool.query('SELECT * FROM requests WHERE request_id = $1', [requestId])
    let { to_whom, to_where, by_who, offered_role } = r1.rows[0]
    if(!offered_role) { offered_role = '1' }
    const r2 = await pool.query('INSERT INTO users_chats (user_id, chat_id, role) VALUES ($1, $2, $3)', [to_whom, to_where, offered_role])
  } catch (error) {
    console.log('failed to accept a chat invite')
  }
  redirect('/chats')
}

export async function decline(requestId: string) {

}
