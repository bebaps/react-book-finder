import React from 'react';
import book from '../../assets/images/book.svg';
import './Gallery.css';

const Gallery = props => {
  return (
    <div>{
      props.items.map( (item, index) => {
        const { title, imageLinks, infoLink } = item.volumeInfo;
        return (
          <a
            key={index}
            className="book"
            href={infoLink}
            target="_blank"
            rel="noopener"
            >
            <img
              src={undefined !== imageLinks ? imageLinks.thumbnail : {book}}
              alt={`Pictured: The cover for the book ${title}.`}
              className="bookCover"
            />
            <header className="bookTitle">
              {title}
            </header>
          </a>
        );
      })
    }</div>
  );
}

export default Gallery;
