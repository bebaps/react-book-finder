import React, { Component } from 'react';
import book from '../images/book.svg';
import './Gallery.css';

// TODO: Can this component be functional instead?
class Gallery extends Component {

  render() {
    return (
      <div>{
        this.props.items.map( (item, index) => {
          let { title, imageLinks, infoLink } = item.volumeInfo;
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
          )
        })
      }</div>
    )
  }
}

export default Gallery;
