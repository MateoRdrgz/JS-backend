/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TsoaRoute, fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { BookCollectionController } from './../controllers/bookCollection.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { BookController } from './../controllers/book.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AuthorController } from './../controllers/author.controller';
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';



// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "AuthorOutputDTO": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "first_name": {"dataType":"string","required":true},
            "last_name": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BookOutputDTO": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "title": {"dataType":"string","required":true},
            "publish_year": {"dataType":"double","required":true},
            "isbn": {"dataType":"string","required":true},
            "author": {"ref":"AuthorOutputDTO","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "State": {
        "dataType": "refEnum",
        "enums": ["Inutilisable","Mauvais","Passable","Bon","Très bon","Neuf"],
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BookCollectionOutputDTO": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "book": {"ref":"BookOutputDTO","required":true},
            "available": {"dataType":"double","required":true},
            "state": {"ref":"State","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BookCollectionInputDTO": {
        "dataType": "refObject",
        "properties": {
            "book_id": {"dataType":"double","required":true},
            "available": {"dataType":"double","required":true},
            "state": {"ref":"State","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BookCollectionInputPatchDTO": {
        "dataType": "refObject",
        "properties": {
            "book_id": {"dataType":"double"},
            "available": {"dataType":"double"},
            "state": {"ref":"State"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BookInputDTO": {
        "dataType": "refObject",
        "properties": {
            "title": {"dataType":"string","required":true},
            "publish_year": {"dataType":"double","required":true},
            "author_id": {"dataType":"double","required":true},
            "isbn": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BookInputPatchDTO": {
        "dataType": "refObject",
        "properties": {
            "title": {"dataType":"string"},
            "publish_year": {"dataType":"double"},
            "author_id": {"dataType":"double"},
            "isbn": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AuthorInputDTO": {
        "dataType": "refObject",
        "properties": {
            "first_name": {"dataType":"string","required":true},
            "last_name": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AuthorInputPatchDTO": {
        "dataType": "refObject",
        "properties": {
            "first_name": {"dataType":"string"},
            "last_name": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BookCollectionDTO": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double"},
            "book": {"ref":"BookDTO"},
            "available": {"dataType":"boolean","required":true},
            "state": {"dataType":"double","required":true},
            "book_id": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"throw-on-extras","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa




export function RegisterRoutes(app: Router) {

    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################


    
        app.get('/book-collections',
            ...(fetchMiddlewares<RequestHandler>(BookCollectionController)),
<<<<<<< HEAD
            ...(fetchMiddlewares<RequestHandler>(BookCollectionController.prototype.getAllBookCollection)),

            async function BookCollectionController_getAllBookCollection(request: ExRequest, response: ExResponse, next: any) {
=======
            ...(fetchMiddlewares<RequestHandler>(BookCollectionController.prototype.getAllBooksCollection)),

            async function BookCollectionController_getAllBooksCollection(request: ExRequest, response: ExResponse, next: any) {
>>>>>>> 156a112606bda64371de1bd5122101ec36ef39dc
            const args: Record<string, TsoaRoute.ParameterSchema> = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new BookCollectionController();

              await templateService.apiHandler({
<<<<<<< HEAD
                methodName: 'getAllBookCollection',
=======
                methodName: 'getAllBooksCollection',
>>>>>>> 156a112606bda64371de1bd5122101ec36ef39dc
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/book-collections/:id',
            ...(fetchMiddlewares<RequestHandler>(BookCollectionController)),
<<<<<<< HEAD
            ...(fetchMiddlewares<RequestHandler>(BookCollectionController.prototype.getBookCollectionById)),

            async function BookCollectionController_getBookCollectionById(request: ExRequest, response: ExResponse, next: any) {
=======
            ...(fetchMiddlewares<RequestHandler>(BookCollectionController.prototype.getBookCollection)),

            async function BookCollectionController_getBookCollection(request: ExRequest, response: ExResponse, next: any) {
>>>>>>> 156a112606bda64371de1bd5122101ec36ef39dc
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new BookCollectionController();

              await templateService.apiHandler({
<<<<<<< HEAD
                methodName: 'getBookCollectionById',
=======
                methodName: 'getBookCollection',
>>>>>>> 156a112606bda64371de1bd5122101ec36ef39dc
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/book-collections',
            ...(fetchMiddlewares<RequestHandler>(BookCollectionController)),
<<<<<<< HEAD
            ...(fetchMiddlewares<RequestHandler>(BookCollectionController.prototype.createBookCollection)),

            async function BookCollectionController_createBookCollection(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"BookCollectionDTO"},
=======
            ...(fetchMiddlewares<RequestHandler>(BookCollectionController.prototype.postBookCollection)),

            async function BookCollectionController_postBookCollection(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"BookCollectionInputDTO"},
>>>>>>> 156a112606bda64371de1bd5122101ec36ef39dc
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new BookCollectionController();

              await templateService.apiHandler({
<<<<<<< HEAD
                methodName: 'createBookCollection',
=======
                methodName: 'postBookCollection',
>>>>>>> 156a112606bda64371de1bd5122101ec36ef39dc
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.patch('/book-collections/:id',
            ...(fetchMiddlewares<RequestHandler>(BookCollectionController)),
<<<<<<< HEAD
            ...(fetchMiddlewares<RequestHandler>(BookCollectionController.prototype.updateBookCollection)),

            async function BookCollectionController_updateBookCollection(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"BookCollectionDTO"},
=======
            ...(fetchMiddlewares<RequestHandler>(BookCollectionController.prototype.patchBookCollection)),

            async function BookCollectionController_patchBookCollection(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"BookCollectionInputPatchDTO"},
>>>>>>> 156a112606bda64371de1bd5122101ec36ef39dc
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new BookCollectionController();

              await templateService.apiHandler({
<<<<<<< HEAD
                methodName: 'updateBookCollection',
=======
                methodName: 'patchBookCollection',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/book-collections/:id',
            ...(fetchMiddlewares<RequestHandler>(BookCollectionController)),
            ...(fetchMiddlewares<RequestHandler>(BookCollectionController.prototype.deleteBookCollection)),

            async function BookCollectionController_deleteBookCollection(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new BookCollectionController();

              await templateService.apiHandler({
                methodName: 'deleteBookCollection',
>>>>>>> 156a112606bda64371de1bd5122101ec36ef39dc
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/books',
            ...(fetchMiddlewares<RequestHandler>(BookController)),
            ...(fetchMiddlewares<RequestHandler>(BookController.prototype.getAllBooks)),

            async function BookController_getAllBooks(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new BookController();

              await templateService.apiHandler({
                methodName: 'getAllBooks',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/books/:id',
            ...(fetchMiddlewares<RequestHandler>(BookController)),
<<<<<<< HEAD
            ...(fetchMiddlewares<RequestHandler>(BookController.prototype.getBookById)),

            async function BookController_getBookById(request: ExRequest, response: ExResponse, next: any) {
=======
            ...(fetchMiddlewares<RequestHandler>(BookController.prototype.getBook)),

            async function BookController_getBook(request: ExRequest, response: ExResponse, next: any) {
>>>>>>> 156a112606bda64371de1bd5122101ec36ef39dc
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new BookController();

              await templateService.apiHandler({
<<<<<<< HEAD
                methodName: 'getBookById',
=======
                methodName: 'getBook',
>>>>>>> 156a112606bda64371de1bd5122101ec36ef39dc
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/books',
            ...(fetchMiddlewares<RequestHandler>(BookController)),
<<<<<<< HEAD
            ...(fetchMiddlewares<RequestHandler>(BookController.prototype.createBook)),

            async function BookController_createBook(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"BookDTO"},
=======
            ...(fetchMiddlewares<RequestHandler>(BookController.prototype.postBooks)),

            async function BookController_postBooks(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"BookInputDTO"},
>>>>>>> 156a112606bda64371de1bd5122101ec36ef39dc
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new BookController();

              await templateService.apiHandler({
<<<<<<< HEAD
                methodName: 'createBook',
=======
                methodName: 'postBooks',
>>>>>>> 156a112606bda64371de1bd5122101ec36ef39dc
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.patch('/books/:id',
            ...(fetchMiddlewares<RequestHandler>(BookController)),
<<<<<<< HEAD
            ...(fetchMiddlewares<RequestHandler>(BookController.prototype.updateBook)),

            async function BookController_updateBook(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"BookDTO"},
=======
            ...(fetchMiddlewares<RequestHandler>(BookController.prototype.patchBook)),

            async function BookController_patchBook(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"BookInputPatchDTO"},
>>>>>>> 156a112606bda64371de1bd5122101ec36ef39dc
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new BookController();

              await templateService.apiHandler({
<<<<<<< HEAD
                methodName: 'updateBook',
=======
                methodName: 'patchBook',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/books/:id',
            ...(fetchMiddlewares<RequestHandler>(BookController)),
            ...(fetchMiddlewares<RequestHandler>(BookController.prototype.deleteBook)),

            async function BookController_deleteBook(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new BookController();

              await templateService.apiHandler({
                methodName: 'deleteBook',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/books/:id/book-collections',
            ...(fetchMiddlewares<RequestHandler>(BookController)),
            ...(fetchMiddlewares<RequestHandler>(BookController.prototype.getBookCollectionsByBookId)),

            async function BookController_getBookCollectionsByBookId(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new BookController();

              await templateService.apiHandler({
                methodName: 'getBookCollectionsByBookId',
>>>>>>> 156a112606bda64371de1bd5122101ec36ef39dc
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/authors',
            ...(fetchMiddlewares<RequestHandler>(AuthorController)),
            ...(fetchMiddlewares<RequestHandler>(AuthorController.prototype.getAllAuthors)),

            async function AuthorController_getAllAuthors(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new AuthorController();

              await templateService.apiHandler({
                methodName: 'getAllAuthors',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/authors/:id',
            ...(fetchMiddlewares<RequestHandler>(AuthorController)),
            ...(fetchMiddlewares<RequestHandler>(AuthorController.prototype.getAuthorById)),

            async function AuthorController_getAuthorById(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new AuthorController();

              await templateService.apiHandler({
                methodName: 'getAuthorById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/authors',
            ...(fetchMiddlewares<RequestHandler>(AuthorController)),
            ...(fetchMiddlewares<RequestHandler>(AuthorController.prototype.createAuthor)),

            async function AuthorController_createAuthor(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"AuthorInputDTO"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new AuthorController();

              await templateService.apiHandler({
                methodName: 'createAuthor',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/authors/:id',
            ...(fetchMiddlewares<RequestHandler>(AuthorController)),
            ...(fetchMiddlewares<RequestHandler>(AuthorController.prototype.deleteAuthor)),

            async function AuthorController_deleteAuthor(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new AuthorController();

              await templateService.apiHandler({
                methodName: 'deleteAuthor',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.patch('/authors/:id',
            ...(fetchMiddlewares<RequestHandler>(AuthorController)),
            ...(fetchMiddlewares<RequestHandler>(AuthorController.prototype.updateAuthor)),

            async function AuthorController_updateAuthor(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
                    requestBody: {"in":"body","name":"requestBody","required":true,"ref":"AuthorInputPatchDTO"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new AuthorController();

              await templateService.apiHandler({
                methodName: 'updateAuthor',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/authors/:id/books',
            ...(fetchMiddlewares<RequestHandler>(AuthorController)),
            ...(fetchMiddlewares<RequestHandler>(AuthorController.prototype.getBooksByAuthorId)),

            async function AuthorController_getBooksByAuthorId(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"path","name":"id","required":true,"dataType":"double"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new AuthorController();

              await templateService.apiHandler({
                methodName: 'getBooksByAuthorId',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
