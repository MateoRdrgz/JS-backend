import { Controller, Route, Tags,Get, Post, Path, Body, Patch, Delete } from "tsoa";
import { BookCollectionDTO } from "../dto/bookCollection.dto";
import { bookCollectionService } from "../services/bookCollection.service";

@Route("book-collections")
@Tags("BookCollections")
export class BookCollectionController extends Controller {
    @Get("/")
    public async getAllBookCollection(): Promise<BookCollectionDTO[]> {
      return bookCollectionService.getAllBookCollection();
    }
    @Get("/{id}")
    public async getBookCollectionById(@Path() id: number): Promise<BookCollectionDTO> {
      return bookCollectionService.getBookCollectionById(id);
    }
    @Post("/")
    public async createBookCollection(@Body() requestBody: BookCollectionDTO): Promise<BookCollectionDTO> {
      const { book, available, state } = requestBody;
      return bookCollectionService.createBookCollection(available, state, book?.id);
    }
    @Patch("/{id}")
    public async updateBookCollection(@Path() id:number,@Body() requestBody: BookCollectionDTO): Promise<BookCollectionDTO> {
      const { book, available, state } = requestBody;
      return bookCollectionService.updateBookCollection(id, available, state, book?.id);
    }
    @Delete("/{id}")
    public async deleteBookCollection(@Path() id: number): Promise<void> {
      return bookCollectionService.deleteBookCollection(id);
    }
}
