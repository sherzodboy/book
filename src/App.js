import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import BookList from "./components/BookList";

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("books")) || [];

  const [input, setInput] = useState([]);
  const [books, setBooks] = useState(initialState);
  const [editBook, setEditBook] = useState(null);
  const [api, setApi] = useState([]);

  const getApi = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/2")
      .then((response) => response.json())
      .then((data) =>
        setApi(data.title.charAt(0).toUpperCase() + data.title.slice(1))
      );
  };
  getApi();

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            books={books}
            setBooks={setBooks}
            editBook={editBook}
            setEditBook={setEditBook}
          />
        </div>
        <div>
          <BookList
            api={api}
            books={books}
            setBooks={setBooks}
            setEditBook={setEditBook}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
