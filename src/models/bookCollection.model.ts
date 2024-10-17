import { DataTypes, Model } from "sequelize";
<<<<<<< HEAD
import { Book } from "./book.model";
=======
>>>>>>> 156a112606bda64371de1bd5122101ec36ef39dc
import sequelize from "../config/database"; // Connexion à la base de données
import { Book } from "./book.model";

export interface BookCollectionAttributes {
  id?: number;
<<<<<<< HEAD
  book?: Book;
  available: boolean;
  state: number;
  book_id: number;
=======
  book_id: number;
  available: number;
  state: number;
  book?: Book;
>>>>>>> 156a112606bda64371de1bd5122101ec36ef39dc
}

export class BookCollection
  extends Model<BookCollectionAttributes>
  implements BookCollectionAttributes
{
<<<<<<< HEAD
  public id?: number;
  public book? : Book;
  public available!: boolean;
  public state!: number;
  public book_id!: number;

=======
  public id!: number;
  public book_id!: number;
  public available!: number;
  public state!: number;
  public book!: Book;
>>>>>>> 156a112606bda64371de1bd5122101ec36ef39dc
}

BookCollection.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
<<<<<<< HEAD
    available: {
      type: DataTypes.BOOLEAN,
=======
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    available: {
      type: DataTypes.INTEGER,
>>>>>>> 156a112606bda64371de1bd5122101ec36ef39dc
      allowNull: false,
    },
    state: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
<<<<<<< HEAD
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
=======
>>>>>>> 156a112606bda64371de1bd5122101ec36ef39dc
  },
  {
    sequelize,
    tableName: "BookCollection",
  },
);

<<<<<<< HEAD
BookCollection.belongsTo(Book, {
  as: "book",
  foreignKey: "book_id",
=======
BookCollection.belongsTo(Book, { foreignKey: "book_id", as: "book" });
Book.hasMany(BookCollection, {
  foreignKey: "book_id",
  as: "collections",
  sourceKey: "id",
>>>>>>> 156a112606bda64371de1bd5122101ec36ef39dc
});
