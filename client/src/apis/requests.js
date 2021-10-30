import axios from "axios";

const getBooks = async () => {
    try {
        const books = await axios.get("/book");
        return books;
    } catch (error) {
        console.log(error);
    }
};

const addBook = async (data) => {
    try {
        const book = await axios.post("/book", data);
        return book;
    } catch (error) {
        console.log(error);
    }
};

const deleteBook = async (id) => {
    try {
        await axios.delete(`/book/${id}`);
    } catch (error) {
        console.log(error);
    }
};

export { getBooks, addBook, deleteBook };
