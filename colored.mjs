import { Chalk } from 'chalk'

const ch = new Chalk({ level: 2 })

export function err(s) {
  return ch.hex('#800000')(s)
}

export function success(s) {
  return ch.hex('#008000')(s)
}

export function info(s) {
  return ch.hex('#c0c0c0')(s)
}
