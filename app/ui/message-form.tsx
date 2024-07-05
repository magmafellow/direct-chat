'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { sendMessage } from '@/app/actions/send-message'
import { useEffect } from 'react'

function FormButton() {
  useEffect(() => {
    const contentBox = document.querySelector('#content')
    const btn = document.querySelector('#send_message')
    btn?.addEventListener('click', function () {
      if (contentBox) {
        setTimeout(() => {
          contentBox.innerHTML = ''
        }, 1000)
      }
    })
  }, [])
  const { pending } = useFormStatus()

  return (
    <button
      id="send_message"
      onClick={() => {
        // if(document.querySelector('#content')){
        //   setTimeout(() => document.querySelector('#content').value = '', 250)
        // }
      }}
      className="transition py-2 px-4 bg-amber-900 hover:bg-amber-600"
    >
      {pending ? 'processing...' : 'ok'}
    </button>
  )
}

export default function MessageForm({
  userId,
  chatId,
}: {
  userId: string | number
  chatId: string | number
}) {
  const messageWithAddress = sendMessage.bind(null, userId, chatId)

  const [state, dispatch] = useFormState(messageWithAddress, undefined)

  return (
    <>
      <div>
        <p className="text-sky-500 text-center mb-1">{state?.message}</p>
        <p className="text-red-500 text-center mb-1">{state?.error}</p>
        <p></p>
      </div>
      <form action={dispatch} className="flex justify-center">
        <textarea
          className="focus:drop-shadow-form bg-stone-800 outline-2 focus:border-none focus:outline-orange-300 h-36 w-[70vw] max-w-[500px] p-4 text-neutral-200"
          placeholder="i'm waiting u..."
          name="content"
          id="content"
        ></textarea>
        <FormButton />
      </form>
    </>
  )
}
