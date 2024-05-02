import Link from "next/link";

export default function Header({ className }: { className?: string }) {
  return (
    <header className={`min-h-[100px] flex items-center justify-between ${className}`}>
      <Link
        className="font-medium text-blue-300 text-xl hover:drop-shadow-3xl hover:text-blue-600 transition"
        href="/"
      >
        Direct-Chat
      </Link>
      <ul className="flex gap-3 sm:gap-4 md:gap-6 xl:gap-7">
      <li>
          <Link className="hover:underline text-white" href="/find-people">
            find
          </Link>
        </li>
        <li>
          <Link className="hover:underline text-white" href="/chats">
            chats
          </Link>
        </li>
        <li>
          <Link className="hover:underline text-white" href="/requests">
            requests
          </Link>
        </li>
        <li>
          <Link className="hover:underline text-white" href="/profile">
            profile
          </Link>
        </li>
        <li>
          <Link className="hover:underline text-white" href="/login">
            login
          </Link>
        </li>
      </ul>
    </header>
  );
}
