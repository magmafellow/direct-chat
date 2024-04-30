'use client'

export default function LookForSomeoneForm(){
  return (
    <form action="" className="flex flex-col items-center">
      <div className="flex items-center gap-4 md:gap-6 xl:gap-8">
        <label className="md:text-lg xl:text-lg" htmlFor="expectedUser">username: </label>
        <input className="text-stone-800 md:text-lg xl:text-xl py-0.5 px-1" type="text" id="expectedUser" name="expectedUser" />
      </div>
    </form>
  )
}