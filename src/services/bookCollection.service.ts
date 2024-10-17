<<<<<<< HEAD
import { BookCollectionDTO } from "../dto/bookCollection.dto";
import { Book } from "../models/book.model";
import { BookCollection } from "../models/bookCollection.model";

export class BookCollectionService {
    public async getAllBookCollection(): Promise<BookCollectionDTO[]> {
        return BookCollection.findAll({
            include: [{
                model: Book,
                as: 'book'
            }]
        });
    }
    public async getBookCollectionById(id: number): Promise<BookCollectionDTO> {
        const bookCollection = await BookCollection.findByPk(id, {
            include: [{
                model: Book,
                as: 'book'
            }]
        });
        return new Promise((resolve, reject) => {
            if (bookCollection) {
                resolve(bookCollection);
            }
            reject(bookCollection);
        });
    }
    public async createBookCollection(
        available: boolean,
        state: number,
        bookId?: number
    ): Promise<BookCollection> {
        if (bookId && await Book.findByPk(bookId) != null) {
            return BookCollection.create({ book_id: bookId, available, state });
            
        }else{
            throw new Error('Book not found');
        }
    }
    public async updateBookCollection(
        id: number,
        available?: boolean,
        state?: number,
        bookId?: number
    ): Promise<BookCollection> {
        const bookCollection = await BookCollection.findByPk(id);
        if (bookCollection) {
            if (bookId && await Book.findByPk(bookId) != null) {
                if (available) bookCollection.available = available;
                if (state) bookCollection.state = state;
                bookCollection.book_id = bookId;
                return bookCollection.save();
            } else {
                throw new Error('Book not found');
            }
        } else {
            throw new Error('BookCollection not found');
        }
    }
    public async deleteBookCollection(id: number): Promise<void> {
        const bookCollection = await BookCollection.findByPk(id);
        if (bookCollection) {
            await bookCollection.destroy();
        } else {
            throw new Error('BookCollection not found');
        }
    }
}

export const bookCollectionService = new BookCollectionService();
=======
import {
  BookCollectionOutputDTO,
  getIntegerFromState,
  State,
} from "../dto/bookCollection.dto";
import { notFound } from "../error/NotFoundError";
import { BookCollectionMapper } from "../mapper/bookCollection.mapper";
import { Author } from "../models/author.model";
import { Book } from "../models/book.model";
import { BookCollection } from "../models/bookCollection.model";
import { ForeignKeyConstraintError } from "sequelize";

export class BookCollectionService {
  readonly includeBookAndAuthor = {
    include: [
      {
        model: Book,
        as: "book",
        include: [
          {
            model: Author,
            as: "author",
          },
        ],
      },
    ],
  };
  public async getAllBookCollections(): Promise<BookCollectionOutputDTO[]> {
    let bookCollectionList = await BookCollection.findAll(
      this.includeBookAndAuthor,
    );
    return BookCollectionMapper.toOutputDtoList(bookCollectionList);
  }

  public async getBookCollectionById(
    id: number,
  ): Promise<BookCollectionOutputDTO> {
    let bookCollection = await BookCollection.findByPk(
      id,
      this.includeBookAndAuthor,
    );
    if (bookCollection) {
      return BookCollectionMapper.toOutputDto(bookCollection);
    } else {
      notFound("Book Collection");
    }
  }

  public async createBookCollection(
    bookId: number,
    available: number,
    state: State,
  ): Promise<BookCollectionOutputDTO> {
    try {
      let bookCollection = await BookCollection.create({
        book_id: bookId,
        available: available,
        state: getIntegerFromState(state),
      });
      return BookCollectionMapper.toOutputDto(bookCollection);
    } catch (err) {
      if (err instanceof ForeignKeyConstraintError) throw notFound("Book");
      throw err;
    }
  }

  public async updateBookCollection(
    id: number,
    bookId?: number,
    available?: number,
    state?: State,
  ): Promise<BookCollectionOutputDTO> {
    const bookCollection = await BookCollection.findByPk(id);
    if (bookCollection) {
      if (bookId !== undefined) bookCollection.book_id = bookId;
      if (available !== undefined) bookCollection.available = available;
      if (state !== undefined)
        bookCollection.state = getIntegerFromState(state);
      try {
        await bookCollection.save();
      } catch (err) {
        if (err instanceof ForeignKeyConstraintError) throw notFound("Book");
        throw err;
      }
      return BookCollectionMapper.toOutputDto(bookCollection);
    } else {
      notFound("Book Collection");
    }
  }

  public async deleteBookCollection(id: number): Promise<void> {
    const bookCollection = await BookCollection.findByPk(id);
    if (bookCollection) {
      await bookCollection.destroy();
    } else {
      notFound("Book Collection");
    }
  }
}

export const bookCollectionService = new BookCollectionService();
>>>>>>> 156a112606bda64371de1bd5122101ec36ef39dc
