import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { books } from "./books";
import Book from "./book";

function Booklist() {
  return (
    <div className="container">
      <h2 className="logo">MY BOOKS</h2>
      <section className="booklist">
        {books.map((book) => {
          return <Book key={book.id} {...book} />;
        })}
      </section>
    </div>
  );
}

ReactDOM.render(<Booklist />, document.getElementById("root"));
