<<<<<<< HEAD
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
=======
import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Path,
  Post,
  Route,
  Tags,
} from "tsoa";
import {
  BookCollectionInputDTO,
  BookCollectionInputPatchDTO,
  BookCollectionOutputDTO,
} from "../dto/bookCollection.dto";
import { bookCollectionService } from "../services/bookCollection.service";
@Route("book-collections")
@Tags("BookCollections")
export class BookCollectionController extends Controller {
  @Get("/")
  public async getAllBooksCollection(): Promise<BookCollectionOutputDTO[]> {
    return bookCollectionService.getAllBookCollections();
  }

  @Get("{id}")
  public async getBookCollection(
    @Path("id") id: number,
  ): Promise<BookCollectionOutputDTO> {
    return bookCollectionService.getBookCollectionById(id);
  }

  @Post("/")
  public async postBookCollection(
    @Body() requestBody: BookCollectionInputDTO,
  ): Promise<BookCollectionOutputDTO> {
    return bookCollectionService.createBookCollection(
      requestBody.book_id,
      requestBody.available,
      requestBody.state,
    );
  }

  @Patch("{id}")
  public async patchBookCollection(
    @Path("id") id: number,
    @Body() requestBody: BookCollectionInputPatchDTO,
  ): Promise<BookCollectionOutputDTO> {
    return bookCollectionService.updateBookCollection(
      id,
      requestBody.book_id,
      requestBody.available,
      requestBody.state,
    );
  }

  @Delete("{id}")
  public async deleteBookCollection(@Path("id") id: number): Promise<void> {
    await bookCollectionService.deleteBookCollection(id);
  }
>>>>>>> 156a112606bda64371de1bd5122101ec36ef39dc
}
