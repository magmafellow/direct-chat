'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { inviteUser } from '../actions/invite-to-chat'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import clsx from 'clsx'

function Button({ foundUser }: { foundUser: 'found' | 'notFound' | 'init' }) {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className={clsx('py-1 px-2 rounded-md text-lg', {
        'bg-sky-700': foundUser === 'found',
        'text-sky-400': foundUser === 'found',
        'bg-stone-700': foundUser !== 'found',
        'text-stone-400': foundUser !== 'found',
        'cursor-pointer': foundUser === 'found',
        'cursor-not-allowed': foundUser !== 'found'
      })}
      disabled={foundUser !== 'found' ? true : false}
    >
      {pending ? '...' : 'invite'}
    </button>
  )
}

export default function InviteForm({
  foundUser,
  chatId,
}: {
  foundUser: 'found' | 'notFound' | 'init'
  chatId: string
}) {
  const inviteUserAssociated = inviteUser.bind(null, chatId) // function associated with chatId
  const [state, dispatch] = useFormState(inviteUserAssociated, undefined)

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((value) => {
    console.log(`Searching... ${value}`)
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set('expected_user', value)
    } else {
      params.delete('expected_user')
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <form className="flex flex-col items-center" action={dispatch}>
      <div className="my-2 md:my-3 lg:my-4 xl:my-5">
        {state?.message ? (
          <p className="text-green-600 my-2 md:my-3 lg:my-4 xl:my-5">
            {state?.message}
          </p>
        ) : (
          ''
        )}
        {state?.errors?.username ? (
          <p className="text-red-600 my-2 md:my-3 lg:my-4 xl:my-5">
            {state?.errors?.username}
          </p>
        ) : (
          ''
        )}
        {state?.error ? (
          <p className="text-red-600 my-2 md:my-3 lg:my-4 xl:my-5">
            {state?.error}
          </p>
        ) : (
          ''
        )}
        {state?.errors?.role ? (
          <p className="text-red-600 my-2 md:my-3 lg:my-4 xl:my-5">
            {state?.errors?.role}
          </p>
        ) : (
          ''
        )}
        {foundUser === 'init' ? (
          <p>&nbsp;</p>
        ) : foundUser === 'notFound' ? (
          <p className="text-red-500">no such a user</p>
        ) : (
          <p className="text-sky-500">user was found</p>
        )}
      </div>
      <div className="mb-2 md:mb-3 lg:mb-4 xl:mb-5 ">
        <label className="lg:text-lg tracking-wider" htmlFor="chat_name">
          username:{' '}
        </label>
        <input
          className="text-stone-900 tracking-wide lg:text-lg py-0.5 px-1 font-semibold antialiased"
          type="text"
          id="username"
          name="username"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div className="mb-2 md:mb-3 lg:mb-4 xl:mb-5 ">
        <label className="lg:text-lg tracking-wider" htmlFor="role">
          role:{' '}
        </label>
        <select name="role" id="role" className="text-stone-900 font-medium">
          <option value="1">participant</option>
          <option value="2">moderator</option>
          <option value="3">root</option>
        </select>
      </div>
      <div className="mb-4 hidden">
        <ul className="text-lg">
          <li>participant - 1</li>
          <li>moderator - 2</li>
          <li>root - 3</li>
        </ul>
      </div>
      <div className="text-center">
        <Button foundUser={foundUser} />
      </div>
    </form>
  )
}
