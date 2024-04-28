import Header from '@/app/ui/header'
import Footer from '@/app/ui/footer'
import { getUser } from '@/app/lib/dal'
import LogoutForm from '@/app/ui/logout-form'

export default async function Page() {
  const user = await getUser()

  return (
    <div className="container mx-auto flex flex-col min-h-screen">
      <Header className="px-3" />
      <main className="flex-grow">
        <section className="px-4 tracking-wider font-medium text-stone-300">
          <h2 className="drop-shadow-author text-fuchsia-300 font-bold text-center text-lg mb-4 md:text-left">
            {user.username}
          </h2>
          <div>
            email:{' '}
            <span className="text-stone-50">
              {user.email ? user.email : 'not pointed'}
            </span>
          </div>
          <div>
            telegram:{' '}
            <span className="text-stone-50">
              {user.telegram ? user.telegram : 'not pointed'}
            </span>
          </div>
          <div>
            phone:{' '}
            <span className="text-stone-50">
              {user.phone ? user.phone : 'not pointed'}
            </span>
          </div>
        </section>
      </main>
      <div className='flex justify-end pr-4'><LogoutForm /></div>
      <Footer className="px-3" />
    </div>
  )
}
