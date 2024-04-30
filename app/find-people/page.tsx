import Header from "@/app/ui/header";
import LookForSomeoneForm from "@/app/ui/look-for-someone";

export default function Page({ searchParams }: { searchParams: any }) {
  return (
    <div className="container mx-auto">
      <Header className="px-3" />
      <h1 className="text-xl text-center mb-4 md:mb-6 xl:mb-8">Look for someone!</h1>
      <LookForSomeoneForm />
      
    </div>
  )
}
