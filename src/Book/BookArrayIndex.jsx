import React from "react";

const BookArrayIndex = (props) => {
  const { image, title, publisher, price } = props; // Destructure the props object
  console.log(props);
  return (
    <div className="Book m-6">
     
      <div className="book-image">
        <img src={image} alt={title} />
      </div>
      <div className="book-info">
        <h2>{title}</h2>
        <p className="book-author">by {publisher}</p>
        <p className="book-price">${price}</p>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default BookArrayIndex;
