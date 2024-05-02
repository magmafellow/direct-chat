import { getChatById } from '@/app/lib/data'

export default async function ChatText({ chatId }: { chatId: string }) {
  const chat = await getChatById(chatId)

  return (
    <span>
      request to chat{' '}
      <span className="bg-slate-900 hover:bg-rose-700 transition hover:text-green-200 text-slate-300 rounded p-0.5">
        ${chat.name}
      </span>
    </span>
  )
}
