import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

export function expressAuthentication(
    request: Request,
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
                if (err) {
                    reject(err);
                }else{
                    resolve(decoded);
                }
            });
        });
    }

    return Promise.reject(new Error("Unknown security"));
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