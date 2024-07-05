import { getUser } from '@/app/lib/dal'
import { getMessages, isParticipantInChat } from '@/app/lib/data'
import { isEmpty } from '@/app/lib/utils'
import Header from '@/app/ui/header'
import MessageArea from '@/app/ui/message-area'
import MessageForm from '@/app/ui/message-form'
import Link from 'next/link'

export default async function Page({ params, searchParams }: { params: { id: string }, searchParams: any }) {
  const chatId = params.id
  
  const user = await getUser()

  const isParticipant = await isParticipantInChat(user.user_id, chatId)
  if (!isParticipant) {
    return (
      <div className='container mx-auto flex flex-col items-center pt-3 gap-10'>
        Woow. Do not hack us
        <span className="text-stone-500">
          You are not allowed to access this chat
        </span>
        <Link className='text-xl text-black bg-white py-1 px-2 rounded-xl' href="/">Go home</Link>
      </div>
    )
  }

  const message_chunk = searchParams.message_chunk
  const messages = await getMessages(chatId, message_chunk)

  return (
    <div className="container mx-auto">
      {/* <div className="h-8 md:h-12 lg:h-16 xl:h-20"></div> */}
      <Header className="px-3" />
      <MessageArea messages={messages} chatId={params.id} />
      <MessageForm userId={user.user_id} chatId={params.id} />
    </div>
  )
}
