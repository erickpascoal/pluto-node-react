import { Transaction } from "../../hooks/useTransactions/types/Transacion";
import { useTransaction } from "../../hooks/useTransactions";
import { Container } from "./styles";

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
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                        <th>Ações</th>
                    </tr>
                </thead>
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
                                <button onClick={() => handleDeleteTransaction(transaction)}>
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