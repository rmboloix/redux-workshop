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

const searchTypePrefixes = {
  [searchTypes.author]: 'inauthor',
  [searchTypes.publisher]: 'inpublisher',
  [searchTypes.title]: 'intitle',
  [searchTypes.isbn]: 'isbn',
  [searchTypes.subject]: 'subject'
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
  if (type === searchTypes.raw) {
    return term
  }
  if (type === searchTypes.author) {
    term = term.split(';').map((author) => { return ':' + author }).join('+')
  }
  return searchTypePrefixes[type] + ':' + term
}
