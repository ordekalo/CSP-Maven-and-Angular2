export class Coupon {
  id: number;
  title: string;
  startDate: Date;
  endDate: Date;
  amount: number;
  type: string;
  message: string;
  price: number;
  image: string;
  edit ?: false;

  constructor(id: number, title: string, startDate: Date, endDate: Date,
              amount: number, type: string, message: string, price: number, image: string) {
    this.id = id;
    this.title = title;
    this.startDate = startDate;
    this.endDate = endDate;
    this.amount = amount;
    this.type = type;
    this.message = message;
    this.price = price;
    this.image = image;
  }
}
