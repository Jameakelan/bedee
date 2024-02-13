import { Request, Response, NextFunction } from "express";
import ApiResponse from "../models/ApiReponse";
import JWTHelper from "../utils/jwt/jwt_helper";

const jwtHelper = JWTHelper.getInstance();

const allowedAccess = ["/api/user/signup", "/api/user/login", "/api", "/api/"];

const middleware = (req: Request, res: Response, next: NextFunction) => {
  const url = req.url || "";
  const token = req.headers.authorization?.split(" ")[1] || "";
  let response: ApiResponse = {
    message: "Unauthorized",
    statusCode: 401,
  };

  if (url === "/") {
    response = {
      message: "forbidden",
      statusCode: 403,
    };
    return res.json(response);
  }

  /**
   * Allow access to the following endpoints without authentication
   */

  if (allowedAccess.indexOf(url) >= 0) {
    next();
    return;
  }

  /**
   * For access to the todo endpoints, the user must be authenticated
   */

  if (token) {
    const verified = jwtHelper.verify(token);
    if (verified) {
      next();
      return;
    }
  }

  return res.json(response);
};

export default middleware;
