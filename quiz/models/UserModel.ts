interface UserModelProps {
  username?: string;
  imageUri?: string;
  score?: number;
}

class UserModel {
  username?: string;
  imageUri?: string;
  score?: number;

  constructor(props: UserModelProps) {
    Object.assign(this, props);
  }
}

export default UserModel;
