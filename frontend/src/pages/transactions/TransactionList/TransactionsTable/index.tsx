import { Transaction } from "../../../../hooks/useTransactions/types/Transacion";
import { useTransaction } from "../../../../hooks/useTransactions";
import { Container, Filter } from "./styles";

export function TransactionsTable() {

    const { transactions, deleteTransaction } = useTransaction();

    async function handleDeleteTransaction(transaction: Transaction) {
        const confirmValue = window.confirm(`Deseja mesmo deletar a transação "${transaction.title}" ?`);
        if (confirmValue) {
            await deleteTransaction(transaction.id);
            //TODO: Adicionar mensagem de sucesso
        }
    }

    return (
        <Container>
            {transactions.length > 0 &&
                <Filter>
                    <li className="active">Todos</li>
                    <li>Gasto</li>
                    <li>Recebido</li>
                </Filter>

            }
            <table>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {transaction.type === 'withdraw' && <>-</>}
                                {transaction.amountStr}</td>
                            <td>{transaction.category}</td>
                            <td> {transaction.datePaymentStr}</td>
                            <td>
                                <button className="edit" title="Editar">
                                    <i className="fa fa-pencil"></i>
                                </button>
                                <button className="delete" title="Deletar" onClick={() => handleDeleteTransaction(transaction)}>
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    );
}