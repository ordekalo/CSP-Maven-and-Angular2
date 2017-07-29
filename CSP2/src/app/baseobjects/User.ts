export class User {
  userName: string;
  password: string;
  clientType: string;

  constructor(userName: string, password: string, clientType: string) {
    this.userName = userName;
    this.password = password;
    this.clientType = clientType;
  }
}
