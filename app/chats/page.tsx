import MessageArea from '@/app/ui/message-area'
import MessageForm from '@/app/ui/message-form'
import Header from '@/app/ui/header'
import Link from 'next/link'
import { getChats, getMessages } from '@/app/lib/data'
import { getUser } from '../lib/dal'

export default async function Page({
  searchParams,
}: {
  searchParams: { id: string }
}) {
  const user = await getUser()
  const chats = await getChats(user.user_id)

  return (
    <div className="container mx-auto">
      <Header className="px-3" />
      <main>
        <ul className="pl-7">
          {chats.length > 0 ? chats.map((chat) => (
            <li key={chat.chat_id} className="mb-4 bg-sky-950 py-1 px-2 rounded-lg flex justify-between items-center">
              <Link
                className="text-sky-600 hover:text-sky-700 tracking-wider font-medium text-lg md:text-xl lg:text-2xl transition"
                href={`/chats/specific/${chat.chat_id}`}
              >
                {chat.name}
              </Link>
              <div className='flex gap-5'>
                <Link className='text-sky-400 hover:text-sky-700' href='#'>Settings</Link>
                <Link className='text-sky-400 hover:text-sky-700' href='#'>Invite</Link>
              </div>
            </li>
          )) : <div className='text-lg tracking-wide'>You do not have any chats</div>}
        </ul>
      </main>
    </div>
  )
}
