'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header({ className }: { className?: string }) {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <header
      className={`min-h-[100px] flex items-center justify-between ${className}`}
    >
      <Link
        className="font-medium hidden md:inline text-blue-300 text-xl hover:drop-shadow-3xl hover:text-blue-600 transition"
        href="/"
      >
        Direct-Chat
      </Link>
      <Link
        className="font-medium md:hidden text-blue-300 text-xl hover:drop-shadow-3xl hover:text-blue-600 transition"
        href="/"
      >
        DC
      </Link>
      <ul className="flex gap-6 sm:gap-7 md:gap-8 xl:gap-7">
        <li>
          <Link
            className={clsx('lg:hover:underline text-lg', {
              'text-sky-500': pathname.includes('/find-people'),
              'font-semibold': pathname.includes('/find-people'),
              'text-white': !pathname.includes('/find-people'),
            })}
            href="/find-people"
          >
            find
          </Link>
        </li>
        <li>
          <Link
            className={clsx('lg:hover:underline text-lg', {
              'text-sky-500': pathname.includes('/chats'),
              'font-semibold': pathname.includes('/chats'),
              'text-white': !pathname.includes('/chats'),
            })}
            href="/chats"
          >
            chats
          </Link>
        </li>
        <li>
          <Link className={clsx("lg:hover:underline text-lg", {
            'text-sky-500': pathname.includes('/requests'),
            'font-semibold': pathname.includes('/requests'),
            'text-white': !pathname.includes('/requests'),
          })} href="/requests">
            requests
          </Link>
        </li>
        <li>
          <Link className={clsx("lg:hover:underline text-lg", {
            'text-sky-500': pathname.includes('/profile'),
            'font-semibold': pathname.includes('/profile'),
            'text-white': !pathname.includes('/profile'),
          })} href="/profile">
            profile
          </Link>
        </li>
        <li>
          <Link className={clsx("lg:hover:underline text-lg", {
            'text-sky-500': pathname.includes('/login'),
            'font-semibold': pathname.includes('/login'),
            'text-white': !pathname.includes('/login'),
          })} href="/login">
            login
          </Link>
        </li>
      </ul>
    </header>
  )
}
