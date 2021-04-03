import { getRepository } from "typeorm";
import Transaction from "../../models/Transaction";

interface Props {
  title: string;
  type: string;
  amount: number;
  category: string;
  datePayment: Date;
  installment: number;
}

export default class CreateTransactionService {

  public async execute(transaction: Props) {

    const repository = getRepository(Transaction);

    const transactionCreated = repository.create(transaction);
    await repository.save(transactionCreated);

    return transactionCreated;
  }
}