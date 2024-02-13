import { Router, Request, Response } from "express";
import UserController from "../../controllers/user_controller";
import UserModel from "../../models/UserModel";
import { SingUp } from "../../models/types";
import ApiResponse from "../../models/ApiReponse";
import JWTHelper from "../../utils/jwt/jwt_helper";

const userRouter = Router();
const userController: UserController = new UserController();
const jwtHelper: JWTHelper = JWTHelper.getInstance();
const TOKEN_EXPIRED_IN = 604800;

userRouter.post("/signup", (req: Request, res: Response) => {
  const response: ApiResponse = {
    success: true,
    statusCode: 200,
    message: "User signed up successfully",
  };

  try {
    const user: UserModel = new UserModel(req.body);
    const status: SingUp = userController.singUp(user);

    if (status === "existed" || status === "failed") {
      response.success = false;
      response.statusCode = 400;
      response.message = "Failed to sign up";
      return res.json(response);
    }

    /// expired in 7 days
    const token = jwtHelper.sign({ username: user.username }, TOKEN_EXPIRED_IN);

    response.data = {
      username: user.username,
      accessToken: token,
    };

    return res.json(response);
  } catch (error) {
    console.log(error);

    response.success = false;
    response.statusCode = 500;
    response.message = "Server error";
    return res.json(response);
  }
});

userRouter.post("/login", (req: Request, res: Response) => {
  const response: ApiResponse = {
    success: true,
    statusCode: 200,
    message: "User logged in successfully",
  };

  try {
    const user: UserModel = new UserModel(req.body);
    const loginStatus = userController.login(user);

    if (loginStatus === "failed") {
      response.success = false;
      response.statusCode = 400;
      response.message = "Failed to login";
      return res.json(response);
    }

    const token = jwtHelper.sign({ username: user.username }, TOKEN_EXPIRED_IN);

    response.data = {
      username: user.username,
      accessToken: token,
    };
    return res.json(response);
  } catch (error) {
    console.log(error);

    response.success = false;
    response.statusCode = 500;
    response.message = "Server error";
    return res.json(response);
  }
});

export default userRouter;
