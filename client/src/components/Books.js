import React, { Component } from "react";
import Card from "./Card";
import "./Books.css";

class Books extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fw">
                <div className="container">
                    <div className="grid">
                        {this.props.books.map((book) => (
                            <Card
                                key={book.bookId}
                                book={book}
                                deleteBook={this.props.deleteBook}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Books;
