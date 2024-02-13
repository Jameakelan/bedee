export interface UserModelProps {
  userId?: string | number;
  username?: string;
  password?: string;
}

export default class UserModel {
  userId?: string | number;
  username?: string;
  password?: string;

  constructor(props: UserModelProps) {
    Object.assign(this, props);
  }
}
