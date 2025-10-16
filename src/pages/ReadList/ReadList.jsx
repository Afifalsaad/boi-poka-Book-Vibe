import React, { useEffect, useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/utility";
import { useLoaderData } from "react-router";
import Book from "../Book/Book";

const ReadList = () => {
  const data = useLoaderData();

  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const storedData = getStoredBook();
    const convertedStoredBookID = storedData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedStoredBookID.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  const handleSort = (type) => {
    setSort(type);
    if (type === "pages") {
      const sortedByPages = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedByPages);
    }
    if (type === "ratings") {
      const sortedByRatings = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedByRatings);
    }
  };

  return (
    <div>
      <details className="dropdown">
        <summary className="btn m-1">Sort By: {sort ? sort : ""}</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          <li>
            <a onClick={() => handleSort("pages")}>Pages</a>
          </li>
          <li>
            <a onClick={() => handleSort("ratings")}>Ratings</a>
          </li>
        </ul>
      </details>
      <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          {readList.map((b) => (
            <Book key={b.bookId} singleBook={b}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
