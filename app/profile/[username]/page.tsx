import { getUserByUsername } from '@/app/lib/data'
import { getDate, getInfoWrappedInSpan } from '@/app/lib/utils'
import Header from '@/app/ui/header'

export default async function Page({
  params,
}: {
  params: { username: string }
}) {
  const user = await getUserByUsername(params.username)

  if (!user) {
    return (
      <div className="container mx-auto">
        <Header className="px-3" />
        <div className="px-4">No user found</div>
      </div>
    )
  }

  return (
    <div className="container mx-auto">
      <Header className="px-3" />
      <main className="px-4">
        <h2 className='text-center mb-4 font-semibold text-lg lg:text-left lg:pl-4'>Profile info</h2>
        <div className='md:mb-1 lg:mb-2 xl:mb-3 lg:text-lg'>
          <span className="text-stone-300 mr-2">Username:</span>
          {getInfoWrappedInSpan(user.username)}
        </div>
        <div className='md:mb-1 lg:mb-2 xl:mb-3 lg:text-lg'>
          <span className="text-stone-300 mr-2">Phone:</span>
          {getInfoWrappedInSpan(user.phone)}
        </div>
        <div className='md:mb-1 lg:mb-2 xl:mb-3 lg:text-lg'>
          <span className="text-stone-300 mr-2">Telegram:</span>
          {getInfoWrappedInSpan(user.telegram)}
        </div>
        <div className='md:mb-1 lg:mb-2 xl:mb-3 lg:text-lg'>
          <span className="text-stone-300 mr-2">Email:</span>
          {getInfoWrappedInSpan(user.email)}
        </div>
        <div className='md:mb-1 lg:mb-2 xl:mb-3 lg:text-lg'>
          <span className="text-stone-300 mr-2">With us since:</span>
          {getInfoWrappedInSpan(
            user.time_created ? getDate(user.time_created) : ''
          )}
        </div>
      </main>
    </div>
  )
}
