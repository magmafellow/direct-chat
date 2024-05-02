import Header from '@/app/ui/header'
import Link from 'next/link'
import { getChats, getMessages } from '@/app/lib/data'
import { getUser } from '@/app/lib/dal'
import CreateChatForm from '@/app/ui/create-chat-form'

export default async function Page() {
  const user = await getUser()
  const chats = await getChats(user.user_id)

  return (
    <div className="container mx-auto">
      <Header className="px-3" />
      <main>
        <ul className="pl-3 pr-3 xl:pl-7 xl:pr-0 mb-2 md:mb-4 lg:mb-6 lg:w-[50%] mx-auto">
          {chats.length > 0 ? chats.map((chat) => (
            <li key={chat.chat_id} className="mb-4 bg-sky-950 py-1 px-2 rounded-lg flex justify-between items-center">
              <Link
                className="text-sky-600 hover:text-sky-700 tracking-wider font-medium text-lg md:text-xl lg:text-2xl transition"
                href={`/chats/specific/${chat.chat_id}`}
              >
                {chat.name}
              </Link>
              <div className='flex gap-5'>
                <Link className='text-sky-400 hover:text-sky-700' href={`/chats/settings/${chat.chat_id}`}>Settings</Link>
                <Link className='text-sky-400 hover:text-sky-700' href={`/chats/invite/${chat.chat_id}`}>Invite</Link>
              </div>
            </li>
          )) : <div className='text-lg tracking-wide'>You do not have any chats</div>}
        </ul>
        <section>
          <CreateChatForm userId={user.user_id} />
        </section>
        
      </main>
    </div>
  )
}
