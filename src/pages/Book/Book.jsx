import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const {
    image,
    category,
    tags,
    bookName,
    author,
    yearOfPublishing,
    rating,
    bookId,
    totalPages,
  } = singleBook;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div>
        <div className="border-[#13131326] p-10 border-1 rounded-xl">
          <div className="bg-[#1313130c] px-10 py-6 flex items-center justify-center rounded-md">
            <img className="max-h-[200px]" src={image} alt="" />
          </div>
          <div className="flex gap-4 my-4">
            <h2 className="bg-[#23be0a0d] text-[#23be0a] py-2 px-3 rounded-2xl font-semibold">
              {category}
            </h2>
            <h2 className="bg-[#23be0a0d] text-[#23be0a] py-2 px-3 rounded-2xl font-semibold">
              {tags[0]}, {tags[1]}
            </h2>
          </div>
          <div className="border-b-2 border-dashed border-[#13131326] mb-5">
            <h1 className="playfair-font text-2xl font-semibold mb-3">
              {bookName}
            </h1>
            <p className="text-[#131313cc] font-semibold mb-4">{author}</p>
          </div>
          <div className="flex justify-between text-[#131313cc] font-semibold">
            <h1>{yearOfPublishing}</h1>
            <h1>{totalPages}</h1>
            <p>
              {rating} <FontAwesomeIcon icon={faStar} />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
