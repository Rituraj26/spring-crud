package com.crud.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.crud.exception.ResourceNotFoundException;
import com.crud.model.Book;
import com.crud.repository.BookRepository;

@CrossOrigin (origins="http://localhost:3000/")
@RestController
public class BooksController {
	@Autowired
	BookRepository bookRepository;
	
	@GetMapping("/book")
	public List<Book> getAllBooks()
	{
		return bookRepository.findAll();
	}
	
	@PostMapping("/book")
	public Book addBook(@RequestBody Book book)
	{
		bookRepository.save(book);
		return book;
	}
	
	@PutMapping("/book/{id}")
	public Book editBook(@PathVariable int id, @RequestBody Book book)
	{
		Book editedBook = bookRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Book not found"));
		editedBook.setBookName(book.getBookName());
		Book updatedBook = bookRepository.save(editedBook);
		return updatedBook;
	}
	
	@DeleteMapping("/book/{id}")
	public Book deleteBook(@PathVariable int id)
	{
		Book deletedBook = bookRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Book not found"));
		bookRepository.delete(deletedBook);
		return deletedBook;
	}
}
