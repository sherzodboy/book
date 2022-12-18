import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, books, setBooks, editBook, setEditBook }) => {
  const updateBook = (title, id) => {
    const newBook = books.map((book) =>
      book.id === id ? { title, id } : book
    );
    setBooks(newBook);
    setEditBook("");
  };

  useEffect(() => {
    if (editBook) {
      setInput(editBook.title);
    } else {
      setInput("");
    }
  }, [setInput, editBook]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editBook) {
      setBooks([...books, { id: uuidv4(), title: input }]);
      setInput("");
    } else {
      updateBook(input, editBook.id);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a Book..."
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        {editBook ? "OK" : "ADD"}
      </button>
    </form>
  );
};

export default Form;
