import { BookDTO } from "../dto/book.dto";
import { Author } from "../models/author.model";
import { Book } from "../models/book.model";
import { BookCollection } from "../models/bookCollection.model";
import { bookService } from "./book.service";
import { BookCollectionService } from "./bookCollection.service";

export class AuthorService {
  private bookCollectionService = new BookCollectionService();
  // Récupère tous les auteurs
  public async getAllAuthors(): Promise<Author[]> {
    return Author.findAll();
  }

  // Récupère un auteur par ID
  public async getAuthorById(id: number): Promise<Author | null> {
    return Author.findByPk(id);
  }

  // Crée un nouvel auteur
  public async createAuthor(
    firstName: string,
    lastName: string
  ): Promise<Author> {
    return Author.create({first_name: firstName, last_name: lastName });
  }

  // Supprime un auteur par ID
  public async deleteAuthor(id: number): Promise<void> {
    const author = await Author.findByPk(id);
    const bookCollections  = await this.bookCollectionService.getAllBookCollection();
    const bookCollectionsByAuthor= bookCollections.filter(
      (bookCollection) => bookCollection.book?.author?.id === id
    );
    if (author && bookCollectionsByAuthor.length === 0) {
      await author.destroy();
    }
  }

  // Met à jour un auteur
  public async updateAuthor(
    id: number,
    firstName?: string,
    lastName?: string
  ): Promise<Author | null> {
    const author = await Author.findByPk(id);
    if (author) {
      if (firstName) author.first_name = firstName;
      if (lastName) author.last_name = lastName;
      await author.save();
      return author;
    }
    return null;
  }
  public async getBooksByAuthorId(id: number): Promise<Book[] | null> {
    const author = await Author.findByPk(id, {
      include: [{
        model: BookCollection,
        as: 'books'
      }]
    });
    const books = await bookService.getAllBooks();
    const booksByAuthor = books.filter(
      (book) => book.author?.id === id
    );
    return booksByAuthor; 
  }
}

export const authorService = new AuthorService();
