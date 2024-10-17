import { DataTypes, Model } from "sequelize";
import { Book } from "./book.model";
import sequelize from "../config/database"; // Connexion à la base de données

export interface BookCollectionAttributes {
  id?: number;
  book?: Book;
  available: boolean;
  state: number;
  book_id: number;
}

export class BookCollection
  extends Model<BookCollectionAttributes>
  implements BookCollectionAttributes
{
  public id?: number;
  public book? : Book;
  public available!: boolean;
  public state!: number;
  public book_id!: number;

}

BookCollection.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    state: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "BookCollection",
  }
);

BookCollection.belongsTo(Book, {
  as: "book",
  foreignKey: "book_id",
});
