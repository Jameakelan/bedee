import UserModel from "../../models/UserModel";
import FileHelper from "../file/file_helper";
import CONST from "../value/const";

class UserHelper {
  private static instance: UserHelper;
  private fileHelper: FileHelper = FileHelper.getInstance();

  static getInstance() {
    if (!UserHelper.instance) {
      UserHelper.instance = new UserHelper();
    }
    return UserHelper.instance;
  }

  getAll(): UserModel[] {
    const data: UserModel[] = this.fileHelper.readJsonFile(
      CONST.USER_DATA_PATH
    );
    return data;
  }

  findOne(username: string): UserModel | undefined {
    const data = this.getAll();
    return data.find((u) => u.username === username);
  }
}

export default UserHelper;
