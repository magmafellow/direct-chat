'use client'

import { accept, decline } from '@/app/actions/decide'

export default function Decide({ requestId }: { requestId: string }) {
  return (
    <div className="flex justify-center gap-4">
      <button
        className="px-4 py-2 rounded-md bg-emerald-700 hover:bg-emerald-600 transition"
        onClick={(e) => accept(requestId)}
      >
        Accept
      </button>
      <button
        className="px-4 py-2 rounded-md bg-amber-700 hover:bg-amber-600 transition"
        onClick={(e) => decline(requestId)}
      >
        Decline
      </button>
    </div>
  )
}
