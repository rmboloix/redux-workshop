import axios from 'axios'
const API_KEY = 'AIzaSyAk-aZkG4d0yS_TRTh2NyAtEfhtAfQdE5c'
const GOOGLE_API = `https://www.googleapis.com/books/v1/volumes`

export function googleAPISearchRequestGenerator (
    searchTerm,
    searchType,
    resultsByPage,
    startIndex
) {
  return axios.get(createGoogleRequest(searchTerm, searchType, resultsByPage, startIndex))
}

export function createGoogleRequest (query, type, maxResults, startIndex) {
  query = transformToSpecificQuery(query, type)
  return `${GOOGLE_API}?key=${API_KEY}&q=${query}+subject:Computers&startIndex=${startIndex}&maxResults=${maxResults}`
}

function transformToSpecificQuery (query, type) {
  query = query.trim()

  switch (type) {
    case 'author':
      return createAuthorRequestByQuery(query)
    case 'publisher':
      return `inpublisher:"${query}"`
    case 'title':
      return `intitle:"${query}"`
    case 'isbn':
      return `isbn:${query}`
    default:
      return `"${query}"`
  }
}

function createAuthorRequestByQuery (query) {
  let authors = query.split(/;/g).map((author) => {
    return `inauthor:"${author}"`
  })

  return authors.join('+')
}
