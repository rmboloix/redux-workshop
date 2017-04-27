import React, {Component} from 'react'

import BookImage from './BookImage.jsx'
import BookDescription from './BookDescription.jsx'
import BookInfo from './BookInfo.jsx'

class Book extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showDescription: true,
      showImage: true
    }

    this.setOnlyImageState = this.setOnlyImageState.bind(this)
    this.setOnlyDescriptionState = this.setOnlyDescriptionState.bind(this)
  }

  setOnlyImageState () {
    this.setState({
      showDescription: false,
      showImage: true
    })
  }

  setOnlyDescriptionState () {
    this.setState({
      showDescription: true,
      showImage: false
    })
  }

  render () {
    if (typeof this.props.book === 'undefined') {
      return null
    }

    let {volumeInfo: info} = this.props.book
    let limitedDescription = info.description &&
            info.description.substr(0, 800).concat(info.description.length > 800 ? '...' : '')
    let pages = info.pageCount
    let imageClass = 'media-left '.concat(this.state.showImage ? '' : 'hidden')
    let descriptionClass = 'media-body '.concat(this.state.showDescription ? '' : 'hidden')

    return (
      <div className='media'>
        <div className={imageClass} >
          {info.imageLinks &&
            <BookImage link={info.previewLink ? info.previewLink : '#'}
              image={info.imageLinks.thumbnail}
              alt={info.title} />
          }
          <BookInfo pages={pages}
            averageRating={info.averageRating}
            publishedDate={info.publishedDate}
            industryIdentifiers={info.industryIdentifiers}
            authors={info.authors} />
        </div>
        <div className={descriptionClass}>
          <BookDescription title={info.title}
            categories={info.categories}
            publisher={info.publisher}
            description={limitedDescription} />
        </div>
      </div>
    )
  }
}

export default Book
