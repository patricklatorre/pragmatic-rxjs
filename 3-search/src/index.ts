import * as $ from 'jquery'
import MockDB from './mockdb'
import { Subject } from 'rxjs'
import { debounceTime } from 'rxjs/operators'
const mockDB = new MockDB()


///////////////////////////////////////////////////////////
const searchFieldChange$ = new Subject()

$('#search > .field').on('keyup change', () => {
  /* Pump search field input into searchFieldChange$ stream */
  searchFieldChange$.next(
    $('#search > .field').val().toString()
  )
})

/* Ajax request rate limiter */
searchFieldChange$
  .pipe(debounceTime(1000))
  .subscribe((query: string) => ajaxRequest(query))
///////////////////////////////////////////////////////////



/* Mock ajax request */
function ajaxRequest(query: string) {
  if (query === '') return
  console.log('Searching..')
  const results = mockDB.find(query).map(data => data.word)
  console.log('Done')
  console.log(results)
}
