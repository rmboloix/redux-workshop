import React from 'react';
import PropTypes from 'prop-types';

const BookImage = ({ link, image, alt }) => {
  const src = image.replace(/^http:/, 'https:');

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="media-object img-thumbnail"
        src={src}
        alt={alt}
      />
    </a>
  );
};

BookImage.defaultProps = {
  image: '/public/noimage.png',
  link: '#',
};

BookImage.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default BookImage;
