import { Router, Request, Response } from "express";
import TodoController from "../../controllers/todo_controller";
import ApiResponse from "../../models/ApiReponse";
import JWTHelper from "../../utils/jwt/jwt_helper";
import { Jwt } from "jsonwebtoken";
import TodoModel from "../../models/TodoModel";

const todoRouter = Router();
const todoController = new TodoController();
const jwtHelper = JWTHelper.getInstance();

todoRouter.post("/create", (req: Request, res: Response) => {
  const response: ApiResponse = {
    success: true,
    message: "",
    statusCode: 200,
  };

  try {
    const token = req.headers.authorization;
    const payload = jwtHelper.verifyAuthenticated(token);
    const { username } = payload;

    const todo = new TodoModel(req.body);
    const insertedTodo = todoController.insert(username, todo);

    response.data = insertedTodo || {};
    response.message = "Todo created successfully";
    return res.json(response);
  } catch (error) {
    console.error(error);
    response.success = false;
    response.message = "Server error";
    response.statusCode = 500;
    return res.json(response);
  }
});

todoRouter.get("/getall", (req: Request, res: Response) => {
  const response: ApiResponse = {
    success: true,
    message: "",
    statusCode: 200,
  };

  try {
    const token = req.headers.authorization;
    const payload = jwtHelper.verifyAuthenticated(token);

    const { username } = payload;
    const todos = todoController.getAll(username);

    response.data = todos || [];
    return res.json(response);
  } catch (error) {
    console.error(error);
    response.success = false;
    response.message = "Server error";
    response.statusCode = 500;
    return res.json(response);
  }
});

todoRouter.get("/get/:id", (req: Request, res: Response) => {
  const response: ApiResponse = {
    success: true,
    message: "",
    statusCode: 200,
  };
  try {
    const { id } = req.params;
    const token = req.headers.authorization;
    const payload = jwtHelper.verifyAuthenticated(token);
    const { username } = payload;

    const todo = todoController.getById(id, username);

    response.data = todo || {};
    res.json(response);
  } catch (error) {
    console.error(error);
    response.success = false;
    response.message = "Server error";
    response.statusCode = 500;
    return res.json(response);
  }
});

todoRouter.put("/update/", (req: Request, res: Response) => {
  const response: ApiResponse = {
    success: true,
    message: "Updated successfully",
    statusCode: 200,
  };

  try {
    const token = req.headers.authorization;
    const payload = jwtHelper.verifyAuthenticated(token);
    const { username } = payload;

    const todo = new TodoModel(req.body);
    const updatedTodo = todoController.update(todo, username);

    if (!updatedTodo) {
      response.success = false;
      response.message = "Todo not found";
      response.statusCode = 404;
      return res.json(response);
    }

    response.data = updatedTodo;
    return res.json(response);
  } catch (error) {
    console.error(error);
    response.success = false;
    response.message = "Server error";
    response.statusCode = 500;
    return res.json(response);
  }
});

todoRouter.delete("/delete/:id", (req: Request, res: Response) => {
  const response: ApiResponse = {
    success: true,
    message: "Todo deleted successfully",
    statusCode: 200,
  };

  try {
    const { id } = req.params;
    const token = req.headers.authorization;
    const payload = jwtHelper.verifyAuthenticated(token);
    const { username } = payload;

    const deletedTodo = todoController.delete(id, username);

    if (!deletedTodo) {
      response.success = false;
      response.message = "Todo not found";
      response.statusCode = 404;
      return res.json(response);
    }

    response.data = deletedTodo;
    return res.json(response);
  } catch (error) {
    console.error(error);
    response.success = false;
    response.message = "Server error";
    response.statusCode = 500;
    return res.json(response);
  }
});

export default todoRouter;
