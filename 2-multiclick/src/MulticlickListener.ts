import { fromEvent } from 'rxjs'
import { filter, timeInterval, map, buffer, debounceTime } from 'rxjs/operators'
import { TimeInterval } from 'rxjs/internal/operators/timeInterval'


interface IMulticlickHandler {
  onMulticlick: (count: number) => void,
  onEachMulticlick?: () => void,
  onTimeout?: () => void,
  timeout?: number,
}


export default class {
  constructor(
    element: any,
    handler: IMulticlickHandler
  ) {

    /* normalize options */
    const onMulticlick = handler.onMulticlick
    const onEachMulticlick = handler.onEachMulticlick || function () { }
    const onTimeout = handler.onTimeout || function () { }
    const timeout = handler.timeout || 300

    /* stream of all clicks */
    const click$ = fromEvent(element, 'click')

    // /* stream of clicks that count as multiclicks */
    // const validMulticlick$ = click$.pipe(
    //   timeInterval(),
    //   filter(time => time.interval < timeout),
    //   map(time => true)
    // )

    // /* stream of multiclicks timing out */
    // const timeout$ = validMulticlick$.pipe(
    //   debounceTime(timeout)
    // )

    // /* stream of total click count in each multiclick */
    // const multiclickCount$ = validMulticlick$.pipe(
    //   buffer(timeout$),
    //   map(clickArr => clickArr.length + 1)
    // )


    // validMulticlick$.subscribe(() => onEachMulticlick())
    // timeout$.subscribe(() => onTimeout())
    // multiclickCount$.subscribe(count => onMulticlick(count))

    const clicks = click$.subscribe()
  }
}
