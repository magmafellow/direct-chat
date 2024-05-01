'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce';

export default function LookForSomeoneSearch() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((value) => {
    console.log(`Searching... ${value}`);
    const params = new URLSearchParams(searchParams)
    params.set('page', '1')
    if(value){
      params.set('expected-user', value)
    } else {
      params.delete('expected-user')
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (  
    <section className="flex flex-col items-center">
      <div className="flex items-center gap-4 md:gap-6 xl:gap-8">
        <label className="md:text-lg xl:text-lg" htmlFor="expectedUser">
          username:{' '}
        </label>
        <input
          className="text-stone-800 md:text-lg xl:text-xl py-0.5 px-1"
          type="text"
          id="expectedUser"
          name="expectedUser"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </section>
  )
}
