import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAddBookBtn: false,
            showEditForm: true,
            bookDetails: {
                bookName: this.props.selectedBook.bookName
                    ? this.props.selectedBook.bookName
                    : "",
                author: this.props.selectedBook.author
                    ? this.props.selectedBook.author
                    : "",
            },
        };
        console.log(this.props);
    }

    componentDidUpdate = () => {
        if (!this.state.showAddBookBtn && this.props.selectedBook.bookId) {
            this.setState({
                ...this.state,
                showAddBookBtn: true,
            });
        }
    };

    toggleAddBookBtn = () => {
        this.setState({
            ...this.state,
            showAddBookBtn: !this.state.showAddBookBtn,
        });
    };

    handleCancel = () => {
        this.setState({
            ...this.state,
            showAddBookBtn: false,
        });
    };

    handleChange = (e) => {
        this.setState({
            ...this.state,
            bookDetails: {
                ...this.state.bookDetails,
                [e.target.name]: e.target.value,
            },
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.showEditForm) {
            this.props.updateBook(this.state.bookDetails);
        } else {
            this.props.addNewBook(this.state.bookDetails);
        }

        this.setState({
            ...this.state,
            showAddBookBtn: false,
            showEditForm: true,
            bookDetails: {
                bookName: "",
                author: "",
            },
        });
    };

    render() {
        const { bookName, author } = this.state.bookDetails;
        console.log(this.state);
        return (
            <div className="container-fw">
                <div className="container">
                    <div className="form-grid">
                        <button
                            className="btn btn-lg"
                            onClick={this.toggleAddBookBtn}
                        >
                            Add Book
                        </button>
                        {this.state.showAddBookBtn ? (
                            <form className="form" onSubmit={this.handleSubmit}>
                                <div className="form-group mb-4">
                                    <label
                                        className="form-label"
                                        htmlFor="bookName"
                                    >
                                        Book Name
                                    </label>
                                    <input
                                        className="form-input"
                                        id="bookName"
                                        type="text"
                                        name="bookName"
                                        value={bookName}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="form-group mb-5">
                                    <label
                                        className="form-label"
                                        htmlFor="author"
                                    >
                                        Author
                                    </label>
                                    <input
                                        className="form-input"
                                        id="author"
                                        type="text"
                                        name="author"
                                        value={author}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <button className="btn btn-sm me-2">
                                    Submit
                                </button>
                                <button
                                    className="btn btn-sm"
                                    onClick={this.handleCancel}
                                >
                                    Cancel
                                </button>
                            </form>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;
