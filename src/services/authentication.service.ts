import { User } from "../models/user.model"; // Modèle Sequelize
import jwt from "jsonwebtoken"; // Pour générer le JWT
import { Buffer } from "buffer"; // Pour décoder Base64
import { notFound } from "../error/NotFoundError";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key"; // Clé secrète pour signer le token

const scopes: { [key: string]: string[] } = {
  admin: ["author.read", "author.write", "author.delete", "book.read", "book.write", "book.delete","bookCollection.read","bookCollection.write","bookCollection.delete"],
  gerant: ["author.read", "author.write", "book.read", "book.write","bookCollection.read","bookCollection.write","bookCollection.delete"],
  utilisateur: ["author.read", "book.read","bookCollection.read","book.write"]
  }

export class AuthenticationService {
  public async authenticate(
    username: string,
    password: string
  ): Promise<string> {
    // Recherche l'utilisateur dans la base de données
    const user = await User.findOne({ where: { username } });

    if (!user) {
      throw notFound("User");
    }

    // Décoder le mot de passe stocké en base de données
    const decodedPassword = Buffer.from(user.password, "base64").toString(
      "utf-8"
    );

    // Vérifie si le mot de passe est correct
    if (password === decodedPassword) {
      //si le username de l'utilisateur est presente dans la liste permissions
      //on génère un JWT avec les permissions associées
      if (scopes[username]) {
        const token = jwt.sign(
          { username: user.username, scopes: scopes[username] },
          JWT_SECRET,
          {
            expiresIn: "1h",
          }
        );
        return token;
      }else{
        // Si l'utilisateur est authentifié, on génère un JWT
        const token = jwt.sign({ username: user.username,scopes: [] }, JWT_SECRET, {
          expiresIn: "1h",
        });
        return token;
      }
    } else {
      let error = new Error("Wrong password");
      (error as any).status = 403;
      throw error;
    }
  }
}

export const authService = new AuthenticationService();
