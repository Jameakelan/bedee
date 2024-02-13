import UserModel from "../models/UserModel";
import { LogIn, SingUp } from "../models/types";
import FileHelper from "../utils/file/file_helper";
import JWTHelper from "../utils/jwt/jwt_helper";
import CONST from "../utils/value/const";

class UserController {
  private static instance: UserController;
  private fileHelper: FileHelper = FileHelper.getInstance();

  static getInstance() {
    if (!UserController.instance) {
      UserController.instance = new UserController();
    }
    return UserController.instance;
  }

  singUp(user: UserModel): SingUp {
    try {
      const data = this.fileHelper.readJsonFile(CONST.USER_DATA_PATH);
      const isUserExist =
        data.findIndex((u: any) => u.username === user.username) !== -1;
      if (isUserExist) {
        return "existed";
      }
      this.fileHelper.insertJson(CONST.USER_DATA_PATH, user);
      return "success";
    } catch (error) {
      return "failed";
    }
  }

  login(user: UserModel): LogIn {
    try {
      const data: UserModel[] = this.fileHelper.readJsonFile(
        CONST.USER_DATA_PATH
      );
      const index = data.findIndex(
        (u: UserModel) =>
          u.username === user.username && u.password === user.password
      );
      if (index === -1) {
        return "failed";
      }
      return "success";
    } catch (error) {
      console.log(error);
      return "failed";
    }
  }
}

export default UserController;
