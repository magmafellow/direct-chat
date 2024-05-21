'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { pool } from '@/database.mjs'


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
