import { getAllUsersFromChatByChatId } from '@/app/lib/data'
import clsx from 'clsx'
import PutoutButton from './putout-button'

function isForbiddenToPutout(doerRole: string, userRole: string) {
  if (doerRole === 'moderator' && userRole === 'moderator') return true
  else if (doerRole === 'root' && userRole === 'root') return true
  else if (doerRole === 'moderator' && userRole === 'root') return true
  else return false
}

export default async function PutoutTable({
  chatId,
  currentRole,
}: {
  chatId: string
  currentRole: string
}) {
  const allUsers = await getAllUsersFromChatByChatId(chatId)

  return (
    <table className="w-[70%] mx-auto border-collapse border border-stone-200">
      <thead>
        <tr>
          <th className="border border-stone-200">username</th>
          <th className="border border-stone-200">email</th>
          <th className="border border-stone-200">role</th>
          <th className="border border-stone-200">put out</th>
        </tr>
      </thead>
      <tbody>
        {allUsers?.map((user) => (
          <tr className="text-center" key={user.username}>
            <td
              className={clsx('border border-stone-200 font-semibold', {
                'text-red-300': user.rolename === 'root',
                'text-sky-300': user.rolename === 'moderator',
                'text-stone-300': user.rolename === 'participant',
              })}
            >
              {user.username}
            </td>
            <td className="border border-stone-200">{user.email}</td>
            <td
              className={clsx('border border-stone-200', {
                'text-red-300': user.rolename === 'root',
                'text-sky-300': user.rolename === 'moderator',
                'text-stone-300': user.rolename === 'participant',
              })}
            >
              {user.rolename}
            </td>
            <td className="border border-stone-200">
              <PutoutButton disabled={isForbiddenToPutout(currentRole, user.rolename)} userId={user.user_id} chatId={chatId} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
