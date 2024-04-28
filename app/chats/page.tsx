import MessageArea from '@/app/ui/message-area'
import MessageForm from '@/app/ui/message-form'
import Header from '@/app/ui/header'
import Link from 'next/link'
import { getChats } from '@/app/lib/data'
import { getUser } from '../lib/dal'

export default async function Page() {
  const user = await getUser()
  const chats = await getChats(user.user_id)

  return (
    <div className="container mx-auto">
      <Header className="px-3" />
      <main>
        <ul className="pl-7">
          {chats?.map((chat) => (
            <li key={chat.chat_id} className="mb-4">
              <Link
                className="text-sky-600 hover:text-sky-700 tracking-wider font-medium text-lg md:text-xl lg:text-2xl transition"
                href={`/chat?id=${chat.chat_id}`}
              >{chat.name}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
