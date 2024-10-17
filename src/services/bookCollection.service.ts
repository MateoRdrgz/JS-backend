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