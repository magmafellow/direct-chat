import Link from "next/link";
import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";

export default function Page() {
  return (
    <div className="container mx-auto flex flex-col min-h-screen">
      <Header className="px-3" />
      <main className="flex-grow">
        <h3 className="text-2xl text-center mb-4">You are Welcome!</h3>
        <p className="text-xl text-center mb-2">Explore it!</p>
        <div className="mb-2 px-3 font-medium ">
          <Link
            className="text-xl text-fuchsia-300 hover:text-fuchsia-500 transition"
            href="/chats"
          >
            → Go to chats
          </Link>
        </div>
        <div className="px-3 font-medium ">
          <Link
            className="text-xl text-fuchsia-300 hover:text-fuchsia-500 transition"
            href="/profile"
          >
            → Check profile out
          </Link>
        </div>
      </main>
      <Footer className="px-3" />
    </div>
  );
}
