import Transaction from "../models/Transaction";

export default class TransactionDTO {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  datePayment: Date;

  constructor(transaction: Transaction) {
    this.id = transaction.id;
    this.title = transaction.title;
    this.type = transaction.type;
    this.amount = +transaction.amount;
    this.category = transaction.category;
    this.datePayment = transaction.datePayment;
  }

}