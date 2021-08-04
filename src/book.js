import React from "react";
import "./index.css";

const Book = ({ title, img, author, link }) => {
  return (
    <article className="book">
      <h1>
        <span>Title : </span>
        {title}
      </h1>
      <img src={img} alt={title} />
      <h4>
        <span>Author :</span>
        {author}
      </h4>
      <a href={link}>Read</a>
    </article>
  );
};

export default Book;
