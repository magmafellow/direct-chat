import { getUser } from '@/app/lib/dal'
import { getChatById, getRequests } from '@/app/lib/data'
import Link from 'next/link'
import ChatText from './chat-text'

export default async function Requests() {
  const user = await getUser()
  const requests = await getRequests(user.user_id)

  return (
    <ul className="pl-3 pr-3 xl:pl-7 xl:pr-0 mb-2 md:mb-4 lg:mb-6 lg:w-[50%] mx-auto">
      {requests?.map((request) => (
        <li key={request.request_id} className="mb-4 mb:mb-2 lg:mb-3mb-4 bg-sky-950 py-1 px-2 rounded-lg">
          <Link
            className="text-sky-600 hover:text-sky-700 tracking-wider font-medium text-lg md:text-xl lg:text-2xl transition"
            href={`/requests/decide/${request.to_where}`}
          >
            <ChatText chatId={request.to_where} />
          </Link>
        </li>
      ))}
    </ul>
  )
}
