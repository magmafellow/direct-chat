import { roleEntry } from "@/app/lib/definitions";

export function isEmpty(obj: Object) {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}

export function getTime(timeObj : any) {
  return timeObj.getHours() + ':' + (timeObj.getMinutes() > 9 ? timeObj.getMinutes() : '0' + String(timeObj.getMinutes()))
}

export function getDictionaryDesctiptions(list: roleEntry[] | undefined){
  if(!list){
    throw new Error('list of roleEntries is empty')
  }
  const desc: any = {}
  list.forEach((element) => {
    desc[element.name] = element.description
  });
  return desc
}
