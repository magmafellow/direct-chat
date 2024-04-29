import { getTime } from '@/app/lib/utils'

export default function MessageArea({ messages }: { messages: any[] }) {
  const styles = {
    li: 'bg-zinc-700 rounded-md min-w-48 mb-4 py-2 px-4 text-neutral-200 font-light antialiased max-w-[750px]',
    author: 'text-blue-500 font-semibold tracking-wide',
    time: 'text-neutral-400',
  }
  return (
    <div className="w-[95%] mb-10 mx-auto h-[50vh] rounded-xl bg-stone-800 border border-neutral-400 overflow-auto">
      <ul className="md:p-4 lg:p-6 xl:p-8 2xl:p-10 flex flex-col gap-5 items-center">
        {messages.map((message) => (
          <li key={message.message_id} className={styles.li}>
            <div className="flex justify-between mb-2">
              <span className={styles.author}>{message.username}</span>
              <span className={styles.time}>
                {getTime(message.time_created)}
              </span>
            </div>
            <p>{message.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
