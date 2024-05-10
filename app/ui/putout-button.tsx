'use client'

import clsx from 'clsx'
import { putoutUser } from '../actions/putout-user'

export default function PutoutButton({
  disabled,
  userId,
  chatId,
}: {
  disabled: boolean,
  userId: string
  chatId: string
}) {
  const associatedPutoutUser = putoutUser.bind(null, userId, chatId)

  return (
    <button
      type="button"
      className={clsx("text-xl",
        {
          'text-red-400': !disabled,
          'hover:font-bold': !disabled,
          'text-stone-400': disabled,
        }
      )}
      disabled={disabled}
      onClick={() => associatedPutoutUser()}
    >
      X
    </button>
  )
}
