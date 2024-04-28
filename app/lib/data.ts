import { dbSecret } from '@/key.mjs'
import { Pool } from 'pg'

const pool = new Pool({
  database: 'direct_chat',
  user: 'postgres',
  host: 'localhost',
  port: 5432,
  password: dbSecret,
})

export async function getChats(userId: string | number) {
  try {
    const r = await pool.query(
      `
      SELECT * FROM users_chats
      JOIN chats ON users_chats.chat_id = chats.chat_id
      WHERE users_chats.user_id = $1
    `,
      [userId]
    )
    return r.rows
  } catch (error) {
    console.log('failed to get chats')
    return null
  }
}
