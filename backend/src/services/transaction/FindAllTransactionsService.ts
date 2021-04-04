import { Brackets, getRepository } from "typeorm";
import { format, endOfMonth } from "date-fns";
import Transaction from "../../models/Transaction";

interface Props {
  date: Date,
  type: 'withdraw' | 'deposit' | undefined
}

export default class FindAllTransactionsService {

  public async execute({ date, type }: Props) {

    const repository = getRepository(Transaction);

    console.log('date', date);


    const startDate = format(date, 'yyyy-MM-dd')
    const endDate = format(endOfMonth(date), 'yyyy-MM-dd')

    console.log('startDate', startDate);
    console.log('endDate', endDate);


    const transactions = await repository.createQueryBuilder('transaction')
      .where(`transaction.date_payment >= '${startDate}'`)
      .andWhere(`transaction.date_payment <= '${endDate}'`)

      .andWhere(new Brackets(qb => {
        let query = `transaction.id != 0`;
        if (type) {
          query = `transaction.type = '${type}'`;
        }
        qb.where(query)
      }))

      .getMany();

    return transactions;
  }

}