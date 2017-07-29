export class Customer {
  id: number;
  custName: string;
  password: string;
  edit = false;

  constructor(id: number, custName: string, password: string) {
    this.id = id;
    this.custName = custName;
    this.password = password;
  }
}
