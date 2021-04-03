import { parseISO } from 'date-fns';
import { Request, Response, Router } from 'express';
import TransactionDTO from '../dtos/TransactionDTO';
import CreateTransactionService from '../services/transaction/CreateTransactionService';
import DeleteTransactionService from '../services/transaction/DeleteTransactionService';
import FindAllTransactionsService from '../services/transaction/FindAllTransactionsService';
import AppError from '../shared/errors/AppError';

class TransactionRouter {

  public routes() {
    const router = Router();

    router.get('/:dateMonth', this.findAll)
    router.post('/', this.create)
    router.delete('/:id', this.delete)

    return router;
  }

  private async findAll(request: Request, response: Response) {

    const { dateMonth } = request.params;

    const service = new FindAllTransactionsService();

    const transactions = await service.execute({ dateMonth: parseISO(dateMonth) });

    const transactionsDTOs = transactions.map(transaction => new TransactionDTO(transaction));

    return response.status(200).json(transactionsDTOs)
  }

  private async create(request: Request, response: Response) {
    const { title, type, amount, category, datePayment, installment } = request.body;

    const service = new CreateTransactionService();

    const transactionCreated = await service.execute({
      title,
      type,
      amount,
      category,
      datePayment,
      installment
    });

    return response.status(201).json(transactionCreated)
  }

  private async delete(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteTransactionService();

    await service.execute({
      id: +id
    });

    return response.status(204).json()
  }

}

export default new TransactionRouter().routes();