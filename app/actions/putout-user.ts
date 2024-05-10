'use server'

import { dbSecret } from '@/key.mjs'
import { Pool } from 'pg'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

const pool = new Pool({
  database: 'direct_chat',
  user: 'postgres',
  host: 'localhost',
  port: 5432,
  password: dbSecret,
})

export async function putoutUser(userId: string, chatId: string) {
  try {
    const r = await pool.query(
      'DELETE FROM users_chats WHERE user_id = $1 AND chat_id = $2',
      [userId, chatId]
    )
  } catch (error) {
    console.log('failed to putout user by userId and chatId')
  }
  revalidatePath(`/chats/settings/${chatId}`)
  redirect(`/chats/settings/${chatId}`)
}
