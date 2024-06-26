import { unstable_noStore } from 'next/cache'
import { roleEntry } from '@/app/lib/definitions'
import { trackDynamicFetch } from 'next/dist/server/app-render/dynamic-rendering'
import { pool } from '@/database.mjs'


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

export async function getMessages(
  chatId: string | number,
  count?: number | undefined
): Promise<any[]> {
  unstable_noStore()
  if (!count) {
    count = 1
  }
  const limit = 7 * count
  try {
    // const r = await pool.query(`
    //   SELECT users.username, messages.content, messages.time_created, messages.message_id FROM messages
    //   JOIN users ON messages.user_id = users.user_id
    //   WHERE messages.chat_id = $1
    //   ORDER BY messages.time_created DESC
    //   LIMIT $2
    // `, [chatId, limit])

    const r = await pool.query(
      `
    SELECT users_chats.role AS role_id, roles.name AS role, users.user_id AS user_id, messages.chat_id AS chat_id, users.username, messages.content, messages.time_created, messages.message_id FROM messages
    JOIN users ON messages.user_id = users.user_id
    JOIN users_chats ON users.user_id = users_chats.user_id AND messages.chat_id = users_chats.chat_id
    JOIN roles ON users_chats.role = roles.role_id
    WHERE messages.chat_id = $1
    ORDER BY messages.time_created DESC
    `,
      [chatId]
    )

    return r.rows ? r.rows : []
  } catch (error) {
    console.log('failed to get messages related to specific chat by chatId')
  }
  return []
}

export async function isParticipantInChat(
  userId: string | number,
  chatId: string | number
) {
  unstable_noStore()
  try {
    const r = await pool.query(
      `
      SELECT * FROM users_chats
      WHERE user_id = $1 AND chat_id = $2
    `,
      [userId, chatId]
    )
    if (r.rows.length > 0) {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.log('failed to check is somebody a participant or not')
  }
}

export async function isAdminInChat(userId: string, chatId: string) {
  unstable_noStore()
  try {
    const r = await pool.query(
      `
      SELECT roles.name AS role, users_chats.user_id FROM users_chats
      JOIN roles ON users_chats.role = roles.role_id
      WHERE users_chats.user_id = $1 AND users_chats.chat_id = $2 AND roles.name LIKE 'admin'
    `,
      [userId, chatId]
    )
    if (r.rows.length > 0) {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.log('failed to check is somebody an admin or not')
  }
}

export async function getRole(userId: string, chatId: string) {
  unstable_noStore()
  try {
    const r = await pool.query(
      `
      SELECT roles.name AS role, users_chats.user_id FROM users_chats
      JOIN roles ON users_chats.role = roles.role_id
      WHERE users_chats.user_id = $1 AND users_chats.chat_id = $2
    `,
      [userId, chatId]
    )
    if (r.rows.length > 0) {
      return r.rows[0].role
    } else {
      return false
    }
  } catch (error) {
    console.log('failed to check is somebody an admin or not')
  }
}

export async function getRoleDescriptions(): Promise<roleEntry[] | undefined> {
  unstable_noStore()
  try {
    const r = await pool.query(`
      SELECT * FROM roles
    `)
    return r.rows
  } catch (error) {
    console.log('failed to get role descriptions')
  }
}

export async function getFilteredUsers(query: string, page: string) {
  unstable_noStore()
  try {
    console.log('finding', query)
    if (!query) {
      return []
    } else {
      const r = await pool.query('SELECT * FROM users WHERE username ILIKE $1', [query])
      return r.rows
    }
  } catch (error) {
    console.log(error)
    console.log('failed to get filtered users')
  }
}

export async function getUserById(userId: string){
  unstable_noStore()
  try {
    const r = await pool.query('SELECT * FROM users WHERE user_id = $1', [userId])
    return r.rows[0]
  } catch (error) {
    console.log('failed to get user by id')
  }
}

export async function getUserByUsername(username: string){
  unstable_noStore()
  try {
    const r = await pool.query('SELECT * FROM users WHERE username = $1', [username])
    return r.rows[0]
  } catch (error) {
    console.log('failed to get user by id')
  }
}

export async function getRequests(toWhom: string, byWho: string | undefined = undefined){
  unstable_noStore()
  try {
    if(!byWho) {
      const r = await pool.query(`
        SELECT request_id, to_where, by_who, to_whom, roles.name AS role_name FROM requests
        JOIN roles ON requests.offered_role = roles.role_id
        WHERE to_whom = $1
      `, [toWhom])
      return r.rows
    }
  } catch (error) {
    console.log(error)
    console.log('failed to fetch requests')
  }
}

export async function getRequestById(requestId: string) {
  unstable_noStore()
  try {
    const r = await pool.query('SELECT request_id, to_where, by_who, to_whom, roles.name AS role_name FROM requests JOIN roles ON requests.offered_role = roles.role_id  WHERE request_id = $1', [requestId])
    return r.rows[0]
  } catch (error) {
    console.log('failed to get request by id')
  }
}

export async function getAllUsersFromChatByChatId(chatId: string){
  unstable_noStore()
  try {
    const r = await pool.query(`
    SELECT users.user_id, users.username, users.email, roles.name as rolename FROM users_chats
    JOIN users ON users_chats.user_id = users.user_id
    JOIN roles ON users_chats.role = roles.role_id
    WHERE users_chats.chat_id = $1
    `, [chatId])
    return r.rows
  } catch (error) {
    console.log('failed to get all users from a chat by a chat id')
  }
}

export async function getChatById(chatId: string){
  unstable_noStore()
  try {
    const r = await pool.query('SELECT * FROM chats WHERE chat_id = $1', [chatId])
    return r.rows[0]
  } catch (error) {
    console.log('failed to get chat by id')
  }
}

export async function getChatByRequestId(requestId: string){
  unstable_noStore()
  try {
    const r = await pool.query('SELECT to_where FROM requests WHERE request_id = $1', [requestId])
    const r1 = await pool.query('SELECT * FROM chats WHERE chat_id = $1', [r.rows[0].to_where])
    return r1.rows[0]
  } catch (error) {
    console.log('failed to get a chat by a requestId')
  }
}
