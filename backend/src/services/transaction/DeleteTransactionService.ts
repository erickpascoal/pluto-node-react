import { getRepository, Repository } from "typeorm";
import Transaction from "../../models/Transaction";
import AppError from "../../shared/errors/AppError";

interface Props {
  id: number
}

export default class DeleteTransactionService {

  private repository: Repository<Transaction>;

  constructor() {
    this.repository = getRepository(Transaction);
  }

  public async execute({ id }: Props) {

    await this.verifyTransactionExists(id);

    await this.repository.delete(id);
  }


  private async verifyTransactionExists(id: number) {
    const transaction = await this.repository.findOne(id);

    if (!transaction) {
      throw new AppError('Transação não encontrada')
    }
  }
}