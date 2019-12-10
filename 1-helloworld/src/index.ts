import { from, Subject } from 'rxjs'
import { filter, map, tap } from 'rxjs/operators'

const log = console.log

// 'Hello world' as array of characters
const characters: string[] = 'Hello world!'.split('')

const letter$ = new Subject()
const _letter$ = from(characters).pipe(
  tap(letter => letter$.next(letter))
)



const ascii$ = letter$.pipe(
  map((letter: string) => letter.charCodeAt(0))
)


const onLetter = letter$.subscribe({
  next(letter) {
    log(letter)
  }
})

const onAscii = ascii$.subscribe({
  next(ascii) {
    log('^-------' + ascii)
  }
})


_letter$.subscribe()
