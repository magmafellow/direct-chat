export function isEmpty(obj: Object) {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}

export function getTime(timeObj : any) {
  return timeObj.getHours() + ':' + (timeObj.getMinutes() > 9 ? timeObj.getMinutes() : '0' + String(timeObj.getMinutes()))
}
