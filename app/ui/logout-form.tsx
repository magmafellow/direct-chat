'use client'

import { useFormState, useFormStatus } from "react-dom"
import { logout } from "../actions/auth"

function Button (){
  const { pending } = useFormStatus()
  
  return <button className="py-2 px-4 rounded bg-blue-700 hover:bg-blue-600 transition" type="submit">{pending ? '...' : 'logout'}</button>
}

export default function LogoutForm(){
  const [state, dispatch] = useFormState(logout, undefined)
  
  return (
    <form action={dispatch}>
      <div className="text-center">{state?.message}</div>
      <div className="text-center"><Button /></div>
    </form>
  )
}