import users from "../../data/user";
import UserModel from "../../models/UserModel";

class LeaderBoardController {
  checkUserExist(user: UserModel): boolean {
    const index = users.findIndex((u) => u.username === user.username);
    if (index !== -1) {
      users[index] = user;
    } else {
      users.push(user);
    }
    return index !== -1;
  }

  getTop3(user: UserModel): UserModel[] {
    this.checkUserExist(user);
    users.sort((a, b) => b.score! - a.score!);
    return users.slice(0, 3);
  }

  getOtherUsers(user: UserModel): UserModel[] {
    this.checkUserExist(user);
    users.sort((a, b) => b.score! - a.score!);
    return users.slice(3);
  }
}

export default LeaderBoardController;
