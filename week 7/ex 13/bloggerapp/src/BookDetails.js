import React from "react";

function BookDetails() {
  const books = [
    { id: 1, title: "Learn React", author: "Dan Abramov" },
    { id: 2, title: "Mastering JavaScript", author: "Kyle Simpson" },
    { id: 3, title: "Effective TypeScript", author: "Dan Vanderkam" }
  ];

  return (
    <div>
      <h2>Book Details</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;
