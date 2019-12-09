import * as $ from 'jquery'
import MulticlickListener from './MulticlickListener'
import { Subject } from 'rxjs'

const multiclickListener = new MulticlickListener(document, {
  onMulticlick(count: number) {
    // $('.count').text(`Clicked ${count}x`).show()
    // setTimeout(() => $('.count').hide(), 1000)
  },

  onEachMulticlick() {
    // $('.prompt').text('Multiclicking..').show()
  },

  onTimeout() {
    // $('.prompt').hide()
  }
})
