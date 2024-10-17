import { Request, Response, NextFunction } from "express";
import * as express from "express";
import * as jwt from "jsonwebtoken";
import { AuthorService } from "../services/author.service";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

export function expressAuthentication(
    request: express.Request,
    securityName: string,
    scopes?: string[]
): Promise<any> {
    if (securityName === "jwt") {
        const token = request.body.token || request.query.token || request.headers["authorization"]?.split(" ")[1];

        return new Promise((resolve, reject) => {
            if (!token) {
                reject(new Error("No token provided"));
            }
            jwt.verify(token, "your_jwt_secret_key",function (err : any, decoded : any) {
                console.log("permissions utilisateur"+decoded.scopes);
                console.log("permissions requises"+scopes);
                if (err) {
                    reject(err);
                }else{
                    if(scopes !== undefined){
                        for (let scope of scopes) {
                            if (!decoded.scopes.includes(scope)) {
                                reject(new Error("JWT does not contain required scope."));
                            }
                        }
                    }
                    resolve(decoded);
                }
            });
        });
    }else{
        throw new Error("Only support JWT securityName");
    }
}

/*
export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.sendStatus(401); // Unauthorized
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403); // Forbidden
    }

    (req as any).user = user;
    next();
  });
}
*/