import Express from "express";
declare global {
  namespace Express {
    interface Request {
      id?: Record<string>;
    }
  }
}

declare global {
  interface JwtPayload {
    id?: Record<string>;
  }
}
