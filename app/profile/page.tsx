import Header from '@/app/ui/header'
import Footer from '@/app/ui/footer'
import { getUser } from '@/app/lib/dal'
import LogoutForm from '@/app/ui/logout-form'
import { getDate, getInfoWrappedInSpan } from '@/app/lib/utils'

export default async function Page() {
  const user = await getUser()

  return (
    <div className="container mx-auto flex flex-col min-h-screen">
      <Header className="px-3" />
      <main className="flex-grow">
        <section className="px-4 tracking-wider font-medium">
          <h2 className="drop-shadow-author text-fuchsia-300 font-bold text-center text-lg mb-4 md:text-left">
            {user.username}
          </h2>
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
        </section>
      </main>
      <div className='flex justify-end pr-4'><LogoutForm /></div>
      <Footer className="px-3" />
    </div>
  )
}
