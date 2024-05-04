import { getChatById } from '@/app/lib/data'

export default async function ChatText({
  chatId,
  roleName,
}: {
  chatId: string
  roleName: string
}) {
  const chat = await getChatById(chatId)

  return (
    <span>
      request to chat{' '}
      <span className="bg-slate-900 hover:bg-rose-700 transition hover:text-green-200 text-slate-300 rounded p-0.5">
        ${chat.name}
      </span>{' '}
      <span className='bg-zinc-800 hover:bg-emerald-700 transition text-sky-300 rounded p-0.5'>your role - {roleName}</span>
    </span>
  )
}
