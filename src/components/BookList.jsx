const BookList = ({ api, books, setBooks, setEditBook }) => {
  const handleDelete = ({ id }) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleEdit = ({ id }) => {
    const findBook = books.find((book) => book.id === id);
    setEditBook(findBook);
  };

  return (
    <div className="bookshelf-library">
      {books.map((book) => (
        <li className="list-item" key={book.id}>
          <input
            type="text"
            value={book.title}
            className="list"
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(book)}
            >
              <i className="fa-regular fa-pen-to-square"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(book)}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default BookList;
