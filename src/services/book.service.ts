import { BookCollectionDTO } from "../dto/bookCollection.dto";
import { Author } from "../models/author.model";
import { Book } from "../models/book.model";
import { BookCollection } from "../models/bookCollection.model";
import { AuthorService } from "./author.service";
import { BookCollectionService } from "./bookCollection.service";

export class BookService {

  private authorService = new AuthorService();
  private bookCollectionService = new BookCollectionService();

  public async getAllBooks(): Promise<Book[]> {
    return Book.findAll({
        include: [{
            model: Author,
            as: 'author'
        }]
    });
  }

  public async getBookById(id: number): Promise<Book> {
    const book = await Book.findByPk(id, {
        include: [{
            model: Author,
            as: 'author'
        }]
    });
    return new Promise((resolve, reject) => {
      if (book) {
        resolve(book);
      }
      reject(book);
    });
  }

  public async createBook(
    title: string,
    publishYear: number,
    isbn: string,
    authorId?: number
    
  ): Promise<Book> {
    if(authorId && await this.authorService.getAuthorById(authorId) !=  null){
      return Book.create({ title, publish_year: publishYear, author_id: authorId, isbn });
    }else{
      throw new Error('Author not found');
    }
  }

  public async updateBook(
    id: number,
    title?: string,
    publishYear?: number,
    isbn?: string,
    authorId?: number
  ): Promise<Book> {
    const book = await Book.findByPk(id);
    if (book) {
      if(authorId && await this.authorService.getAuthorById(authorId) !=  null){
        if (title) book.title = title;
        if(publishYear) book.publish_year = publishYear;
        if(isbn) book.isbn = isbn;
        book.author_id = authorId;
        await book.save();
        return book;
      }else{
        throw new Error('Author not found');
      }
    }
    throw new Error('Book not found');
  }
  public async deleteBook(id: number): Promise<void> {
    const book = await Book.findByPk(id);
    const bookCollections = await this.bookCollectionService.getAllBookCollection();
    const bookCollectionsByBook = bookCollections.filter(
      (bookCollection) => bookCollection.book?.id === id
    );
    if (book && bookCollectionsByBook.length === 0) {
      await book.destroy();
    }
  }
  public async getBookCollectionsByBookId(id: number): Promise<BookCollectionDTO[] | null> {
    const book = await Book.findByPk(id, {
      include: [{
        model: BookCollection,
        as: 'bookCollections'
      }]
    });
    const bookCollections = await this.bookCollectionService.getAllBookCollection();
    const bookCollectionsByBook = bookCollections.filter(
      (bookCollection) => bookCollection.book?.id === id
    );
    return bookCollectionsByBook;
  }

}

export const bookService = new BookService();
