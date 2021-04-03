import { getRepository } from "typeorm";
import { format, endOfMonth } from "date-fns";
import Transaction from "../../models/Transaction";

interface Props {
  dateMonth: Date
}

export default class FindAllTransactionsService {

  public async execute({ dateMonth }: Props) {

    const repository = getRepository(Transaction);

    const startDate = format(dateMonth, 'yyyy-MM-dd')
    const endDate = format(endOfMonth(dateMonth), 'yyyy-MM-dd')

    const transactions = await repository.createQueryBuilder('transaction')
      .where(`transaction.date_payment >= '${startDate}'`)
      .andWhere(`transaction.date_payment <= '${endDate}'`)
      .getMany();

    return transactions;
  }

}