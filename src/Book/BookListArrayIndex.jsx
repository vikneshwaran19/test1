import React from "react";
import BookArrayIndex from "./BookArrayIndex";

const books = [
  {
    image:
      "https://m.media-amazon.com/images/I/61ZPDQOjw-L._AC_UY327_FMwebp_QL65_.jpg",
    title: "Children Book",
    publisher: "Random",
    price: 499,
  },
  {
    image:
      "https://m.media-amazon.com/images/I/81JJPDNlxSL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Children Book",
    publisher: "Random",
    price: 800,
  },
];

const BookListArrayIndex = () => {
  return (
    <>
      <div className="m-6">BookList Array</div>
      <div className="flex">
        {books.map((arrayelement, index) => (
          <div key={index} className="flex-initial m-2">
            <h1>
              <p>Book Number</p>
              {index + 1}
            </h1>
            <BookArrayIndex
              image={arrayelement.image}
              title={arrayelement.title}
              publisher={arrayelement.publisher}
              price={arrayelement.price}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default BookListArrayIndex;
