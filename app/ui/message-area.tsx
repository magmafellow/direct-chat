'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getTime } from '@/app/lib/utils'
import clsx from 'clsx'

export default function MessageArea({ messages }: { messages: any[] }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  console.log(pathname, searchParams.toString())

  const handleChunkUp = async () => {
    const params = new URLSearchParams(searchParams)
    let message_chunk = params.get('message_chunk')
    if (!message_chunk || Number(message_chunk) < 1) {
      message_chunk = '2'
    } else {
      message_chunk = String(Number(message_chunk) + 1)
    }
    params.set('message_chunk', message_chunk)
    replace(`${pathname}?${params.toString()}`)
  }

  const styles = {
    li: 'bg-zinc-700 rounded-md min-w-48 mb-0 py-2 px-4 text-neutral-200 font-light antialiased max-w-[750px]',
    author: 'font-semibold tracking-wide',
    time: 'text-neutral-400',
  }
  return (
    <div className="w-[95%] mb-10 mx-auto h-[50vh] rounded-xl bg-stone-800 border border-neutral-400 overflow-auto">
      <ul className="relative md:p-4 lg:p-6 xl:p-8 2xl:p-10 flex flex-col gap-2 md:gap-3 lg:gap-4 xl:gap-5 items-center">
        {messages.map((message) => (
          <li key={message.message_id} className={styles.li}>
            <div className="flex justify-between mb-2">
              <span
                className={`${styles.author} ${clsx({
                  'text-red-300': message.role === 'root',
                  'text-indigo-300': message.role === 'moderator',
                  'text-sky-300': message.role === 'participant'
                })}`}
                // className={`${styles.author} text-sky-600`}
              >
                {message.username}
              </span>
              <span className={styles.time}>
                {getTime(message.time_created)}
              </span>
            </div>
            <p>{message.content}</p>
          </li>
        ))}
        <div
          onClick={handleChunkUp}
          className="absolute bottom-12 left-12 bg-stone-700 text-stone-300 hover:bg-stone-600 py-1 px-2 cursor-pointer rounded-md tracking-wide transition"
        >
          load more
        </div>
      </ul>
    </div>
  )
}
