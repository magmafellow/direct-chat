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

        <div className="mb-5 px-3">
          <h4 className="text-xl font-medium text-lime-400">About</h4>
          <p className="tracking-wider mb-4 text-lime-500 pl-4">This is a little tour upon the <span>direct chat</span> app.<br />
            DC (direct chat) app lets you to create chats and message people around the world!<br />
            So yes. There are a lot of apps providing this stuff. But it sticks to functionality. Nothing redundant.
          </p>
        </div>

        <div className="mb-2 px-3 font-medium ">
          <Link
            className="text-xl text-fuchsia-300 hover:text-fuchsia-500 transition"
            href="/chats"
          >
            → Check out chats
          </Link>
        </div>
        <div className="px-3 font-medium ">
          <Link
            className="text-xl text-fuchsia-300 hover:text-fuchsia-500 transition"
            href="/profile"
          >
            → Check out your profile
          </Link>
        </div>
      </main>
      <Footer className="px-3" />
    </div>
  );
}
