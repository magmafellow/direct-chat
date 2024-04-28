import MessageArea from "@/app/ui/message-area"
import MessageForm from "@/app/ui/message-form"
import Header from "@/app/ui/header"

export default function Page() {
  return (
    <div className="container mx-auto">
      <Header className="px-3" />
      <MessageArea />
      <MessageForm />
    </div>
  )
}
