import { getUser } from '@/app/lib/dal'
import Header from '@/app/ui/header'
import Decide from './decide'
import { getChatByRequestId } from '@/app/lib/data'

export default async function Page({ params }: { params: { requestId: string } }) {
  const user = await getUser()
  const chat = await getChatByRequestId(params.requestId)
  
  
  return (
    <div className="container mx-auto">
      <Header className="px-3" />
      <main className="px-4">
        <h2 className='text-center mb-8 text-xl'>You were inveted to chat <span className='bg-slate-700 hover:bg-rose-700 transition hover:text-green-200 text-slate-300 rounded py-0.5 px-2'>{chat.name}</span> as role {}</h2>
        <Decide requestId={params.requestId} />
      </main>
    </div>
  )
}
