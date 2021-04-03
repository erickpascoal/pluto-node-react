import { addDays, addMonths, parseISO } from "date-fns";
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

    const transactions = [transaction];

    if (transaction.installment > 1) {
      for (let i = 1; i < transaction.installment; i++) {
        transactions.push({
          ...transaction,
          datePayment: addMonths(new Date(transaction.datePayment), (1 * i))
        })
      }
    }

    const repository = getRepository(Transaction);

    const transactionsCreated = repository.create(transactions);
    await repository.save(transactionsCreated);

    return transactionsCreated;
  }
}