import lorem from './lorem'

interface Word {
  id: number,
  word: string
}

export default class MockDB {
  private data: Word[]
  
  constructor() {
    this.data = lorem()
      .split(/\s+/g)
      .map((word, i) => {
        return {
          id: i,
          word: word
              .toLowerCase()
              .replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g, '')
        }
      })
  }
  
  find(query?: string): Word[] {
    if (query === undefined) { 
      return this.data
    }
    return this.data.filter(entry => entry.word.startsWith(query))
  }
}
