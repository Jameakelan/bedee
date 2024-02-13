import * as fs from "fs";
import TodoModel from "../../models/TodoModel";
class FileHelper {
  private static instance: FileHelper;

  static getInstance() {
    if (!FileHelper.instance) {
      FileHelper.instance = new FileHelper();
    }
    return FileHelper.instance;
  }

  readJsonFile(path: string) {
    const data = fs.readFileSync(path, "utf-8");
    return JSON.parse(data);
  }

  writeJsonFile(path: string, data: any) {
    fs.writeFileSync(path, data, { encoding: "utf8" });
  }

  insertJson(path: string, data: any) {
    const json = this.readJsonFile(path) || [];
    json.push(data);
    this.writeJsonFile(path, JSON.stringify(json));
  }

  deleteJson(path: string, id: string | number | undefined) {
    const json: TodoModel[] = this.readJsonFile(path) || [];
    const newJson = json.filter((td) => td.id != id);
    this.writeJsonFile(path, JSON.stringify(newJson));
  }
}

export default FileHelper;
