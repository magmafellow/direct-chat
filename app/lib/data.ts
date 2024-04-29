import { dbSecret } from '@/key.mjs'
import { unstable_noStore } from 'next/cache'
import { Pool } from 'pg'

const pool = new Pool({
  database: 'direct_chat',
  user: 'postgres',
  host: 'localhost',
  port: 5432,
  password: dbSecret,
})

export async function getChats(userId: string | number) {
  unstable_noStore()
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
    return []
  }
}

export async function getMessages(chatId : string | number): Promise<any[]> {
  unstable_noStore()
  try {
    const r = await pool.query(`
      SELECT users.username, messages.content, messages.time_created, messages.message_id FROM messages
      JOIN users ON messages.user_id = users.user_id
      WHERE messages.chat_id = $1
      ORDER BY messages.time_created ASC
      LIMIT 7
    `, [chatId])
    return (r.rows ? r.rows : [])
  } catch (error) {
    console.log(error)
    console.log('failed to get messages related to specific chat by chatId')
  }
  return []
}

export async function isParticipantInChat(userId: string | number, chatId: string | number){
  unstable_noStore()
  try {
    const r = await pool.query(`
      SELECT * FROM users_chats
      WHERE user_id = $1 AND chat_id = $2
    `, [userId, chatId])
    if(r.rows.length > 0){
      return true
    } else {
      return false
    }
  } catch (error) {
    console.log('failed to check is somebody participant or not')
  }
}
