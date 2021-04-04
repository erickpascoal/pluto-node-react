import { Transaction } from "../../../../hooks/useTransactions/types/Transacion";
import { useTransaction } from "../../../../hooks/useTransactions";
import { Container, Filter, FilterItem } from "./styles";

export function TransactionsTable() {

    const {
        transactions,
        loadTransactions,
        deleteTransaction,
        dateSearch,
        typeSearch,
    } = useTransaction();

    async function handleDeleteTransaction(transaction: Transaction) {
        const confirmValue = window.confirm(`Deseja mesmo deletar a transação "${transaction.title}" ?`);
        if (confirmValue) {
            await deleteTransaction(transaction.id);
            //TODO: Adicionar mensagem de sucesso
        }
    }


    return (
        <Container>
            <Filter>
                <FilterItem isActive={!typeSearch}
                    onClick={() => loadTransactions(dateSearch)}
                >
                    Todos
                    </FilterItem>
                <FilterItem isActive={typeSearch === 'deposit'}
                    onClick={() => loadTransactions(dateSearch, 'deposit')}
                >
                    Entradas
                    </FilterItem>
                <FilterItem isActive={typeSearch === 'withdraw'}
                    onClick={() => loadTransactions(dateSearch, 'withdraw')}
                >Saídas
                    </FilterItem>
            </Filter>

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