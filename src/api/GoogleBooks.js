import axios from 'axios'

const API_KEY = 'AIzaSyAk-aZkG4d0yS_TRTh2NyAtEfhtAfQdE5c'
const API_URL = 'https://www.googleapis.com/books/v1/volumes'

export function search (criteria) {
  let options = {
    params: {
      key: API_KEY,
      q: generateQuery(criteria.term.trim(), criteria.type) + '+subject:Computers',
      startIndex: criteria.startIndex,
      maxResults: criteria.maxResults
    }
  }

  return axios.get(API_URL, options)
    .then(response => ({ response }))
    .catch(error => ({ error }))
}

function generateQuery (searchTerm, searchType) {
  switch (searchType) {
    case 'author':
      return searchTerm.split(';').map((author) => { return 'inauthor:' + author }).join('+')
    case 'publisher':
      return 'inpublisher:' + searchTerm
    case 'title':
      return 'intitle:' + searchTerm
    case 'isbn':
      return 'isbn:' + searchTerm
    default:
      return searchTerm
  }
}
