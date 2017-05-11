import axios from 'axios'

const API_KEY = 'AIzaSyAk-aZkG4d0yS_TRTh2NyAtEfhtAfQdE5c'
const API_URL = 'https://www.googleapis.com/books/v1/volumes'

export const searchTypes = {
  author: 'author',
  publisher: 'publisher',
  title: 'title',
  isbn: 'isbn',
  subject: 'subject',
  raw: 'raw'
}

export function search (request) {
  try {
    let options = {
      params: {
        key: API_KEY,
        q: generateQuery(request.criteria),
        startIndex: request.startIndex,
        maxResults: request.pageSize
      }
    }

    return axios.get(API_URL, options)
      .then(response => ({response}))
      .catch(error => ({error}))
  } catch (error) {
    return ({error})
  }
}

function generateQuery (criteria) {
  return Object.keys(criteria)
    .map(type => generateCondition(type, criteria[type]))
    .join('+')
}

function generateCondition (type, term) {
  switch (type) {
    case searchTypes.author:
      return term.split(';').map((author) => { return 'inauthor:' + author }).join('+')
    case searchTypes.publisher:
      return 'inpublisher:' + term
    case searchTypes.title:
      return 'intitle:' + term
    case searchTypes.isbn:
      return 'isbn:' + term
    case searchTypes.subject:
      return 'subject:' + term
    case searchTypes.raw:
      return term
    default:
      throw new Error('Unknown search type')
  }
}
