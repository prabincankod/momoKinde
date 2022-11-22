import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      let user = verify(token, "secret") as JwtPayload;
      req.id = user?.id;
      next();
    } else {
      return res.status(401).send("Unauthorized");
    }
  } catch (error) {
    res.status(401).send("Unauthorized");
  }
};
export default auth;
