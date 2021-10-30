import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
    constructor(props) {
        super(props);
    }

    handleDelete = (id) => {
        this.props.deleteBook(id);
    };

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h2>{this.props.book.bookName}</h2>
                    <p>{this.props.book.author}</p>
                    <button className="btn btn-sm me-2">Edit</button>
                    <button
                        className="btn btn-sm"
                        onClick={() =>
                            this.handleDelete(this.props.book.bookId)
                        }
                    >
                        Delete
                    </button>
                </div>
            </div>
        );
    }
}

export default Card;
