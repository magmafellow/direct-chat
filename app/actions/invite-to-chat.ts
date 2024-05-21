'use server'

import { redirect } from 'next/navigation'
import pg from 'pg'
import { InviteFormSchema } from '../lib/definitions'
import { getUserByUsername } from '../lib/data'
import { getUser } from '../lib/dal'
import { pool } from '@/database.mjs'


export async function inviteUser(
  chatId: string,
  prevState: any,
  formData: FormData
) {

  const byWho = await getUser()
  
  const validatedFields = InviteFormSchema.safeParse({
    username: formData.get('username'),
    role: Number(formData.get('role')),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { username, role } = validatedFields.data

  const user = await getUserByUsername(username)

  if (user?.user_id) {
    try {
      const r = await pool.query('INSERT INTO requests (by_who, to_whom, to_where, offered_role) VALUES ($1, $2, $3, $4)', [byWho.user_id, user.user_id, chatId, role])
    } catch (error) {
      console.log('failed to invite a user')
      return {
        error: 'failed to invite a user'
      }
    }
    return {
      message: 'invite was sent successfuly'
    }
  } else {
    return {
      error: 'failed to invite a user'
    }
  }
}
