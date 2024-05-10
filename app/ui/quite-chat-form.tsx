'use client'

import { useFormState, useFormStatus } from "react-dom"
import { quitChat } from "@/app/actions/quite-chat"


export default function QuitChatForm({ userId, chatId }: { userId: string, chatId: string }){

  const quitChatAssociated = quitChat.bind(null, userId, chatId)
  
  const [state, dispatch] = useFormState(quitChatAssociated, undefined)
  
  return (
    <form action={dispatch}>
      <button className="bg-stone-400 text-stone-800 hover:bg-red-400 hover:text-red-800 text-lg py-1 px-2 rounded-md transition" type="submit">Quit</button>
    </form>
  )
}
