import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAddBookBtn: false,
            bookDetails: {
                bookName: "",
                author: "",
            },
        };
    }

    toggleAddBookBtn = () => {
        this.setState({
            showAddBookBtn: !this.state.showAddBookBtn,
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
        this.props.addNewBook(this.state.bookDetails);
    };

    render() {
        const { bookName, author } = this.state.bookDetails;

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
                                <button className="btn btn-sm">Submit</button>
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
