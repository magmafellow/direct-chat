import MessageArea from "@/app/ui/message-area"
import MessageForm from "@/app/ui/message-form"

export default function Page() {
  return (
    <div className="container mx-auto">
      <div className="h-28"></div>
      <MessageArea />
      <MessageForm />
    </div>
  )
}
