import Header from "../ui/header";
import Requests from "./requests";

export default function Page(){
  return (
    <div className="container mx-auto">
      <Header className="px-3" />
      <div className="px-4">
        <h2 className="text-xl mb-1 mb:mb-2 lg:mb-3 lg:text-center">Your requests in chats here</h2>
        <Requests />
      </div>
    </div>
  )
}