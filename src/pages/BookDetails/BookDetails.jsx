import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utility/utility";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const bookData = useLoaderData();
  const singleBookData = bookData.find((book) => book.bookId === bookId);
  // console.log(singleBookData, bookId);
  const {
    image,
    bookName,
    author,
    tags,
    review,
    totalPages,
    yearOfPublishing,
    rating,
    publisher,
    category,
  } = singleBookData;

  const handleMarkAsRead = (id) => {
    addToStoredDB(id);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between md:my-14 p-2">
      <div className="md:bg-gray-100 p-10 rounded-2xl md:ml-3 md:h-[690px]">
        <img className="md:w-[400px] md:h-[600px]" src={image} alt="" />
      </div>
      <div className="text-center md:text-left md:w-[50%]">
        <h1 className="text-3xl font-bold playfair-font py-3">{bookName}</h1>
        <p className="border-b-1 border-gray-300 py-3">By: {author}</p>
        <p className="py-3 border-b-1 border-gray-300">{category}</p>
        <p className="py-3">
          <span className="font-bold">Review: </span>
          {review}
        </p>
        <div>
          <p className="py-3 border-b-1 border-gray-300">
            <span className="font-bold">Tag: </span>
            <span className="text-[#23be0a] bg-gray-200 px-2 rounded-2xl text-sm">
              #{tags[0]}
            </span>
            <span className="text-[#23be0a] bg-gray-200 px-2 rounded-2xl ml-2 text-sm">
              #{tags[1]}
            </span>
          </p>
        </div>
        <div className="py-5">
          <p className="py-1">
            <span className="text-[#131313b3]">Number of pages:</span>{" "}
            <span className="font-bold">{totalPages}</span>
          </p>
          <p className="py-1">
            <span className="text-[#131313b3]">Publisher: </span>
            <span className="font-bold">{publisher}</span>
          </p>
          <p className="py-1">
            <span className="text-[#131313b3]">Year of publishing: </span>
            <span className="font-bold">{yearOfPublishing}</span>
          </p>
          <p>
            <span className="text-[#131313b3]">Rating: </span>
            <span className="font-bold">{rating}</span>
          </p>
        </div>
        <div className="flex gap-3 justify-center md:justify-start mb-7">
          <button
            onClick={() => handleMarkAsRead(id)}
            className="font-semibold border-1 px-4 py-2 rounded-xl">
            Mark As Read
          </button>
          <button className="text-white bg-sky-500 font-semibold border-1 px-4 py-2 rounded-xl">
            Wish List
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
