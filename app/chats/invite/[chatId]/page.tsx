import { getUserById, getUserByUsername } from '@/app/lib/data'
import Header from '@/app/ui/header'
import InviteForm from '@/app/ui/invite-form'

export default async function Page({ params, searchParams }: { params: { chatId: string }, searchParams: any }) {
  let isUserFound: 'found' | 'notFound' | 'init' = 'init'
  if(searchParams?.expected_user) {
    const expectedUser = await getUserByUsername(searchParams.expected_user)
    if (expectedUser?.user_id) {
      isUserFound = 'found'
    } else {
      isUserFound = 'notFound'
    }
  }

  return (
    <div className="container mx-auto">
      <Header />
      <h2 className="text-center text-xl mb-3">Invite to chat</h2>
      <InviteForm foundUser={isUserFound} chatId={params.chatId} />
    </div>
  )
}
