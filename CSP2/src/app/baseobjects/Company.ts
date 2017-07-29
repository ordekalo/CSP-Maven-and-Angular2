export class Company {
  id: number;
  compName: string;
  password: string;
  email: string;
  edit = false;

  constructor(compName: string, email: string, password: string, id: number) {
    this.id = id;
    this.compName = compName;
    this.email = email;
    this.password = password;
  }
}
