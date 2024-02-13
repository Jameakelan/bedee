import TodoModel from "../models/TodoModel";
import UserModel from "../models/UserModel";
import FileHelper from "../utils/file/file_helper";
import UserHelper from "../utils/user/user_helper";
import CONST from "../utils/value/const";

class TodoController {
  private userHelper = UserHelper.getInstance();
  private fileHelper = FileHelper.getInstance();

  getAll(username: string): TodoModel[] | undefined {
    const user = this.userHelper.findOne(username);

    if (!user) {
      return;
    }

    const data: TodoModel[] = this.fileHelper.readJsonFile(
      CONST.TODO_DATA_PATH
    );
    return data.filter((todo) => todo.userId === user.userId);
  }

  getById(id: string | number, username: string): TodoModel | undefined {
    const user = this.userHelper.findOne(username);

    if (!user) {
      return;
    }

    const data: TodoModel[] = this.fileHelper.readJsonFile(
      CONST.TODO_DATA_PATH
    );

    return data.find((td) => td.userId === user.userId && td.id == id);
  }

  insert(username: string, todo: TodoModel): TodoModel | undefined {
    const user = this.userHelper.findOne(username);

    if (!user) {
      return;
    }

    const t = {
      ...todo,
      userId: user.userId,
      id: Math.floor(Math.random() * 1000),
      createdAt: Date.now(),
      completed: false,
    };
    this.fileHelper.insertJson(CONST.TODO_DATA_PATH, t);
    return t;
  }

  delete(id: string | number, username: string): TodoModel | undefined {
    const user = this.userHelper.findOne(username);

    if (!user) {
      return;
    }

    const data: TodoModel[] = this.fileHelper.readJsonFile(
      CONST.TODO_DATA_PATH
    );

    const todo = data.find((td) => td.userId === user.userId && td.id == id);
    if (todo) {
      this.fileHelper.deleteJson(CONST.TODO_DATA_PATH, todo.id);
      return todo;
    }

    return;
  }

  update(todo: TodoModel, username: string) {
    const user = this.userHelper.findOne(username);

    if (!user) {
      return;
    }

    const data: TodoModel[] = this.fileHelper.readJsonFile(
      CONST.TODO_DATA_PATH
    );
    const index = data.findIndex(
      (td) => td.userId === user.userId && td.id == todo.id
    );

    if (index >= 0) {
      const t = new TodoModel({ ...data[index], ...todo });
      data[index] = t;
      this.fileHelper.writeJsonFile(CONST.TODO_DATA_PATH, JSON.stringify(data));
      return todo;
    }
  }
}

export default TodoController;
