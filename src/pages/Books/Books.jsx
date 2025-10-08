import React, { useEffect, useState } from "react";

const Books = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
        console.log(data);
      });
  }, []);
  return <div></div>;
};

export default Books;
