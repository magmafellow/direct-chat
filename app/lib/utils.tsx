import { roleEntry } from '@/app/lib/definitions'
import clsx from 'clsx'

export function isEmpty(obj: Object) {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}

export function getTime(timeObj: any) {
  return (
    timeObj.getHours() +
    ':' +
    (timeObj.getMinutes() > 9
      ? timeObj.getMinutes()
      : '0' + String(timeObj.getMinutes()))
  )
}

export function getDate(timeObj: any) {
  const time = new Date()
  return (
    time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate() + 1
  )
}

export function getDictionaryDesctiptions(list: roleEntry[] | undefined) {
  if (!list) {
    throw new Error('list of roleEntries is empty')
  }
  const desc: any = {}
  list.forEach((element) => {
    desc[element.name] = element.description
  })
  return desc
}

export function getInfoWrappedInSpan(s: string) {
  return (
    <span
      className={clsx('font-semibold tracking-wider', {
        'drop-shadow-profileInfo': Boolean(s),
      })}
    >
      {s ? s : 'undefined'}
    </span>
  )
}
