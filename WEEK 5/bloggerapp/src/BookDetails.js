import React from "react";

function BookDetails() {
  const books = [
    {
      id: 1,
      title: "React Basics",
      author: "John",
    },
    {
      id: 2,
      title: "Learning Java",
      author: "David",
    },
    {
      id: 3,
      title: "Python Guide",
      author: "Smith",
    },
  ];

  return (
    <div>
      <h2>Book Details</h2>

      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <b>{book.title}</b> - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookDetails;