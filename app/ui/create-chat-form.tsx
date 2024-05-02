'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { createChat } from '../actions/create-chat'

function Button() {
  const { pending } = useFormStatus()

  return (
    <button className="lg:text-xl rounded-lg bg-sky-800 hover:bg-sky-600 py-1 px-2">
      {pending ? 'going...' : 'submit'}
    </button>
  )
}

export default function CreateChatForm({ userId }: { userId: string }) {

  const createChatAssociated = createChat.bind(null, userId)
  
  const [state, dispatch] = useFormState(createChatAssociated, undefined)
  
  return (
    <form className='flex flex-col items-center' action={dispatch}>
      <h3 className='my-2 text-xl text-stone-300 italic font-extralight'>add a new chat here</h3>
      <div>
        {state?.errors?.chatname ? <p className='text-red-600 my-2 md:my-3 lg:my-4 xl:my-5'>{state?.errors?.chatname}</p> : ''}
        {state?.dbError ? <p className='text-red-600 my-2 md:my-3 lg:my-4 xl:my-5'>{state?.dbError}</p> : ''}
        {state?.message ? <p className='text-green-600 my-2 md:my-3 lg:my-4 xl:my-5'>{state?.message}</p> : ''}
      </div>
      <div className='mb-2 md:mb-3 lg:mb-4 xl:mb-5 '>
        <label className='lg:text-lg tracking-wider' htmlFor="chat_name">chatname: </label>
        <input className='text-stone-900 tracking-wide lg:text-lg py-0.5 px-1 font-semibold antialiased' type="text" id="chat_name" name="chat_name" />
      </div>
      <div className='text-center'>
        <Button />
      </div>
    </form>
  )
}
