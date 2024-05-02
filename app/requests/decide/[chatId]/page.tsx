import Header from '@/app/ui/header'

export default function Page({ params }: { params: { chatId: string } }) {
  return (
    <div className="container mx-auto">
      <Header className='px-3' />
      <main className='px-4'>Decide about chat with id of ${params.chatId}</main>
    </div>
  )
}
