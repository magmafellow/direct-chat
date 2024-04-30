'use server'

import { cache } from 'react'
import { cookies } from 'next/headers'
import { decrypt } from '@/app/lib/session'
import { redirect } from 'next/navigation'
import { dbSecret } from '@/key.mjs'

import pg from 'pg'

const pool = new pg.Pool({
  database: 'direct_chat',
  user: 'postgres',
  host: 'localhost',
  port: 5432,
  password: dbSecret,
})

export const verifySession = cache(async () => {
  const cookie = cookies().get('session')?.value
  const session = await decrypt(cookie)

  if (!session?.userId) {
    redirect('/login')
  }

  return { isAuth: true, userId: session.userId }
})

export const getUser = cache(async () => {
  const session = await verifySession()
  if (!session) {
    return null
  }

  try {
    const r = await pool.query('SELECT * FROM users WHERE user_id = $1', [
      session.userId,
    ])
    const user = r.rows[0]
    return user
  } catch (error) {
    console.log('Failed to fetch a user')
    return null
  }
})

export const verifySessionSafe = cache(async () => {
  const cookie = cookies().get('session')?.value
  const session = await decrypt(cookie)

  if (!session?.userId) {
    return { isAuth: false }
  }

  return { isAuth: true, userId: session.userId }
})

export const getUserSafe = cache(async () => {
  const session = await verifySessionSafe()
  if (!session.isAuth) {
    return null
  }

  try {
    const r = await pool.query('SELECT * FROM users WHERE user_id = $1', [
      session.userId,
    ])
    const user = r.rows[0]
    return user
  } catch (error) {
    console.log('Failed to fetch')
    return null
  }
})
