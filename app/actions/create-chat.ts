'use server'

import { dbSecret } from '@/key.mjs'
import { revalidatePath } from 'next/cache'
import { Pool } from 'pg'
import { CreateChatSchema } from '../lib/definitions'

const pool = new Pool({
  database: 'direct_chat',
  user: 'postgres',
  host: 'localhost',
  port: 5432,
  password: dbSecret,
})

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
      INSERT INTO users_chats (user_id, chat_id, isOwner, role) VALUES ()
    `, [userId, r.rows[0].chat_id, 'TRUE', '3'])
  } catch (error) {
    console.log('failed to create a new chat')
    return {
      message: 'the chat was not created. something went wrong'
    }
  }
}
