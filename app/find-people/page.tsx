import Header from "@/app/ui/header";
import LookForSomeoneForm from "@/app/ui/look-for-someone";
import UserTable from "@/app/ui/find-people/user-table";
import Pagination from "@/app/ui/find-people/pagination";

export default function Page({ searchParams }: { searchParams: any }) {
  const query = searchParams['expected-user']
  const page = searchParams.page || 1
  
  return (
    <div className="container mx-auto">
      <Header className="px-3" />
      <h1 className="text-xl text-center mb-4 md:mb-6 xl:mb-8">Look for someone!</h1>
      <LookForSomeoneForm />
      <div className="mb-3 md:mb-5 lg:mb-7 xl:mb-8"></div>
      <UserTable query={query} page={page} />
      <div className="mb-3 md:mb-5 lg:mb-7 xl:mb-8"></div>
      {/* <Pagination /> */}
    </div>
  )
}
