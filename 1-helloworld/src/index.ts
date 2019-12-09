import { from } from 'rxjs'
import { filter, map, tap } from 'rxjs/operators'

const log = console.log

// 'Hello world' as array of characters
const characters = 'Hello world!'.split('')
