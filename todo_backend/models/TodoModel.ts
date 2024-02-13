interface TodoModelProps {
  id?: number | string;
  userId?: number | string;
  title?: string;
  note?: string;
  createdAt?: number;
  completed?: boolean;
}

export default class TodoModel {
  id?: number | string;
  userId?: number | string;
  title?: string;
  note?: string;
  createdAt?: number;
  completed?: boolean;

  constructor(props: TodoModelProps) {
    Object.assign(this, props);
  }
}
