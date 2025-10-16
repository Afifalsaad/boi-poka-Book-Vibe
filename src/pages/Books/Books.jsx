import React, { Suspense } from "react";
// import { useLoaderData } from "react-router";
import Book from "../Book/Book";

const Books = ({ data }) => {
  //   const [allData, setAllData] = useState([]);

  //   useEffect(() => {
  //     fetch(
  //       "https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json"
  //     )
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setAllData(data);
  //         console.log(data);
  //       });
  //   }, []);
  return (
    <div>
      <h1 className="text-2xl font-semibold text-center my-6">Books</h1>
      <div className=" grid md:grid-cols-3 gap-6">
        <Suspense fallback={<span>Loading...</span>}>
          {data.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook}></Book>
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Books;
