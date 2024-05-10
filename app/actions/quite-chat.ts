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

export async function quitChat(userId: string, chatId: string, prevState: any, formData: FormData){
  try {
    const r = await pool.query('DELETE FROM users_chats WHERE user_id = $1 AND chat_id = $2', [userId, chatId])
  } catch (error) {
    console.log('failed to quit a chat by userId and chatId')
  }
  revalidatePath(`/chats/settings`)
  redirect('/chats')
}
