package com.crud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.crud.repository.BookRepository;
import com.crud.model.Book;

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
}
