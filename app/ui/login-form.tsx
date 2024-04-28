import { useFormState, useFormStatus } from 'react-dom'
import { login } from '@/app/actions/auth'

export function Button() {
  const { pending } = useFormStatus()

  return (
    <button type="submit" className="bg-blue-500 py-2 px-4 rounded-md">
      {pending ? '...' : 'ok'}
    </button>
  )
}

export default function LoginForm() {
  const [state, dispatch] = useFormState(login, undefined)

  return (
    <form
      action={dispatch}
      className="flex flex-col items-center gap-3 md:gap-5 xl:gap-7"
    >
      <div className="flex gap-5">
        <label htmlFor="login-username">username: </label>
        <input
          type="text"
          className="text-black font-medium px-1 py-0.5 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[330px]"
          name="username"
          id="login-username"
        />
        <p className="text-red-700">{state?.errors?.username}</p>
      </div>
      <div className="flex gap-5">
        <label htmlFor="login-password">password: </label>
        <input
          type="password"
          className="text-black font-medium px-1 py-0.5 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[330px]"
          name="password"
          id="login-password"
        />
        <p className="text-red-700">{state?.errors?.password}</p>
      </div>
      <div>
        <p className="text-red-500">{state?.message}</p>
      </div>
      <div className="text-center">
        <Button />
      </div>
    </form>
  )
}
