import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Books from "./components/Books";
import Form from "./components/Form";
import { getBooks, addBook, deleteBook } from "./apis/requests";

class App extends Component {
    constructor() {
        super();
        this.state = {
            books: [],
        };
    }

    componentDidMount = async () => {
        const books = await getBooks();
        this.setState({
            ...this.state,
            books: books.data,
        });
    };

    addNewBook = async (data) => {
        const book = await addBook(data);
        this.setState({
            ...this.state,
            books: [...this.state.books, book.data],
        });
    };

    deleteBook = async (id) => {
        const book = await deleteBook(id);
        this.setState({
            ...this.state,
            books: this.state.books.filter((book) => book.bookId !== id),
        });
    };

    render() {
        return (
            <div className="App">
                <Header />
                <Form addNewBook={this.addNewBook} />
                {this.state.books.length ? (
                    <Books
                        books={this.state.books}
                        deleteBook={this.deleteBook}
                    />
                ) : (
                    "No Book Available"
                )}
            </div>
        );
    }
}

export default App;
