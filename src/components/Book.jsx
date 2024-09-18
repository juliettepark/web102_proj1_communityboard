import React from "react";

const Book = ({title, author, image, date, link}) => {
    return(
        <div className="Book">
            <div className="book-content">
                <img width={200} height={300} src={image} alt={title} className="book-image"/>

                <div className="book-description">
                    <p>Title: {title}</p>
                    <p>By: {author}</p>
                    <p>{date}</p>
                </div>

                <a className="button" href={link}>Goodreads</a>
            </div>
        </div>
    );
}

export default Book;