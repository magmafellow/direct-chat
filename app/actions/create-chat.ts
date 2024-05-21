'use server'

import { pool } from '@/database.mjs'
import { revalidatePath } from 'next/cache'
import { Pool } from 'pg'
import { CreateChatSchema } from '../lib/definitions'
import { redirect } from 'next/navigation'


export async function createChat(userId: string, prevState: any, formData: FormData){
  // validating
  const validatedData = CreateChatSchema.safeParse({
    chatname: formData.get('chat_name')
  })

  if(!validatedData.success) {
    return {
      errors: validatedData.error.flatten().fieldErrors
    }
  }
  
  const { chatname } = validatedData.data
  
  try {
    const r = await pool.query(`
      INSERT INTO chats (name) VALUES ($1) RETURNING *
    `, [chatname])

    const r2 = await pool.query(`
      INSERT INTO users_chats (user_id, chat_id, isOwner, role) VALUES ($1, $2, $3, $4)
    `, [userId, r.rows[0].chat_id, 'TRUE', '3'])
  } catch (error) {
    console.log('failed to create a new chat')
    console.log(error)
    return {
      dbError: 'the chat was not created. something went wrong'
    }
  }

  revalidatePath('/chats')
  return {
    message: 'chat was created'
  }
}
