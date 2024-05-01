import { getFilteredUsers } from '@/app/lib/data'
import Link from 'next/link';
import { CgProfile } from "react-icons/cg";

export default async function UserTable({
  query,
  page,
}: {
  query: string
  page: string
}) {
  const users = await getFilteredUsers(query, page)

  return (
    <div>
      <h3 className="text-xl text-center">Found users:</h3>
      <table className="w-full max-w-[700px] mx-auto border-collapse border">
        <thead>
          <tr>
            <th className="border">username</th>
            <th className="border">phone</th>
            <th className="border">email</th>
            <th className='border'>link</th>
          </tr>
        </thead>
        <tbody className="text-stone-200 tracking-wide">
          {users?.map((user) => (
            <tr key={user.user_id} className='odd:bg-slate-700 bg-stone-700'>
              <td className="border px-2 py-2 text-center ">
                {user.username}
              </td>
              <td className="border px-2 py-2 text-center">
                {user.phone}
              </td>
              <td className="border px-2 py-2 text-center">
                {user.email}
              </td>
              <td className="border px-2 py-2 flex justify-center items-center w-full h-full">
                <Link href={`/profile/${user.username}`} className='text-2xl hover:text-sky-500 transition' ><CgProfile /></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
