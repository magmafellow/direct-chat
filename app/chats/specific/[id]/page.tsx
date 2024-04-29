import { getUser } from '@/app/lib/dal'
import { getMessages, isParticipantInChat } from '@/app/lib/data'
import { isEmpty } from '@/app/lib/utils'
import Header from '@/app/ui/header'
import MessageArea from '@/app/ui/message-area'
import MessageForm from '@/app/ui/message-form'
import Link from 'next/link'

export default async function Page({ params }: { params: { id: string } }) {
  const user = await getUser()

  const isParticipant = await isParticipantInChat(user.user_id, params.id)

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

  const messages = await getMessages(params.id)

  return (
    <div className="container mx-auto">
      {/* <div className="h-8 md:h-12 lg:h-16 xl:h-20"></div> */}
      <Header className="px-3" />
      <MessageArea messages={messages} />
      <MessageForm />
    </div>
  )
}
