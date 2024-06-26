'use server'

import { revalidatePath } from 'next/cache'
import { pool } from '@/database.mjs'

export async function sendMessage(
  userId: number | string,
  chatId: number | string,
  prevState: any,
  formData: FormData,
) {
  const content = formData.get('content')
  if(content === ''){
    return {
      error: 'The message is empty'
    }
  }
  try {
    const r = await pool.query(
      `
      INSERT INTO messages (user_id, chat_id, content) VALUES
      ($1, $2, $3)
    `,
      [userId, chatId, content]
    )
    revalidatePath(`/chats/specific/${chatId}`)

    return {
      message: 'Successfuly sent',
    }
  } catch (error) {
    console.log()
    console.log('failed to send message')
    return {
      error: 'Something went wrong'
    }
  }
}
