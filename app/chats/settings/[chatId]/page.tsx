import { getUser } from '@/app/lib/dal'
import { getRole, getRoleDescriptions, isAdminInChat } from '@/app/lib/data'
import { getDictionaryDesctiptions } from '@/app/lib/utils'
import Footer from '@/app/ui/footer'
import Header from '@/app/ui/header'
import PutoutTable from '@/app/ui/putout-table'
import QuitChatForm from '@/app/ui/quite-chat-form'

export default async function Page({ params }: { params: { chatId: string } }) {
  const chatId = params.chatId
  const user = await getUser()

  const isAdmin = await isAdminInChat(user.user_id, chatId)
  const role = await getRole(user.user_id, chatId)
  const roleEntries = await getRoleDescriptions()
  const roleDescriptions = getDictionaryDesctiptions(roleEntries)

  return (
    <div className="container mx-auto flex flex-col min-h-screen">
      <Header className="px-3" />
      <main className="flex-grow px-4">
        {role === 'participant' && (
          <div>
            <p className="mb-2">
              <span className="text-lg">Role in chat</span>:{' '}
              <span className="bg-gray-500 text-stone-900 py-0.5 px-2 rounded-md">
                {role}
              </span>
            </p>
            <div>
              <span className="text-lg">About role</span> -{' '}
              <span className="tracking-wider text-stone-200">
                {roleDescriptions[role]}
              </span>
            </div>
          </div>
        )}

        {role === 'moderator' && (
          <>
            <div className="mb-2 md:mb-4 lg:mb-6">
              <p className="mb-2">
                <span className="text-lg">Role in chat</span>:{' '}
                <span className="bg-indigo-600 text-indigo-300 py-0.5 px-2 rounded-md">
                  {role}
                </span>
              </p>
              <div>
                <span className="text-lg">About role</span> -{' '}
                <span className="tracking-wider text-stone-200">
                  {roleDescriptions[role]}
                </span>
              </div>
            </div>

            <PutoutTable chatId={chatId} currentRole={role} />
          </>
        )}

        {role === 'root' && (
          <>
            <div>
              <p className="mb-2">
                <span className="text-lg">Role in chat</span>:{' '}
                <span className="bg-red-600 text-red-300 py-0.5 px-2 rounded-md">
                  {role}
                </span>
              </p>
              <div>
                <span className="text-lg">About role</span> -{' '}
                <span className="tracking-wider text-stone-200">
                  {roleDescriptions[role]}
                </span>
              </div>
            </div>
            <PutoutTable chatId={chatId} currentRole={role} />
          </>
        )}
      </main>
      <div className="flex justify-end">
        <QuitChatForm userId={user.user_id} chatId={chatId} />
      </div>
      <Footer className="px-3" />
    </div>
  )
}
