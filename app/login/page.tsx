import Header from "@/app/ui/header";
import Forms from './forms'
import { getUser, getUserSafe } from "@/app/lib/dal";
import LogoutForm from "@/app/ui/logout-form";

export default async function Page(){

  const user = await getUserSafe();
  
  return (
    <div className="container mx-auto min-h-screen flex flex-col">
      <Header className="px-3"/>

      <main className="flex-grow">
        <Forms />
      </main>
      {!user ? undefined : <div className="flex justify-end items-center px-3 h-52"><LogoutForm /></div>}
      
    </div>
  )
}
