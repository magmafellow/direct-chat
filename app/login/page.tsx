import Header from "@/app/ui/header";
import Forms from './forms'

export default function Page(){

  const session = {
    isAuth: false
  }
  
  return (
    <div className="container mx-auto px-4 min-h-screen flex flex-col">
      <Header className="px-3"/>

      <main className="flex-grow">
        <Forms />
      </main>

      
    </div>
  )
}