import { Chalk } from 'chalk'

const ch = new Chalk({ level: 2 })

export function err(s) {
  return ch.hex('#ff0000')(s)
}

export function success(s) {
  return ch.hex('#00ffff')(s)
}

export function info(s) {
  return ch.hex('#d7ffd7')(s)
}
