import * as jwt from "jsonwebtoken";

class JWTHelper {
  private static instance: JWTHelper;

  private SECRET_KEY = process.env.SECRET_KEY;

  static getInstance() {
    if (!JWTHelper.instance) {
      JWTHelper.instance = new JWTHelper();
    }
    return JWTHelper.instance;
  }

  sign(payload: any, expiresIn: any): string {
    if (!this.SECRET_KEY) {
      throw new Error("SECRET_KEY is not defined");
    }
    return jwt.sign(payload, this.SECRET_KEY, { expiresIn });
  }

  verify(token: string): string | jwt.JwtPayload | null {
    try {
      if (!this.SECRET_KEY) {
        throw new Error("SECRET_KEY is not defined");
      }

      return jwt.verify(token, this.SECRET_KEY);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  verifyAuthenticated(tokenRaw: string | undefined): jwt.JwtPayload {
    try {
      const token = tokenRaw?.split(" ")[1];
      if (!token) {
        throw new Error("Unauthorized");
      }

      const payload = this.verify(token);
      if (!payload) {
        throw new Error("Unauthorized");
      }
      return payload as jwt.JwtPayload;
    } catch (error) {
      console.log(error);
      return {};
    }
  }
}

export default JWTHelper;
