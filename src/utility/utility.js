const getStoredBook = () => {
  const storedBooks = localStorage.getItem("readList");

  if (storedBooks) {
    const storedBookData = JSON.parse(storedBooks);
    return storedBookData;
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedBook = getStoredBook();
  if (storedBook.includes(id)) {
    alert("Book Already Exists");
  } else {
    storedBook.push(id);
    const data = JSON.stringify(storedBook);
    localStorage.setItem("readList", data);
  }
};

export { addToStoredDB, getStoredBook };
