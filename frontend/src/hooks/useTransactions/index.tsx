import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Transaction } from './types/Transacion';
import { TransactionContextData } from './types/TransactionContextData';
import { TransactionCreate } from './types/TransactionCreate';

interface TransactionProviderProps {
    children: ReactNode;
}

const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData);

export function TransactionProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [dateSearch, setDateSearch] = useState(new Date());
    const [typeSearch, setTypeSearch] = useState<string | undefined>(undefined)


    useEffect(() => {
        loadTransactions(new Date());
    }, []);

    async function loadTransactions(date: Date, type?: string) {
        const year = date.getFullYear();
        const month = date.getMonth();

        setTypeSearch(type)
        setDateSearch(date);


        api.get<Transaction[]>(`transactions/year/${year}/month/${month}`, {
            params: { type }
        })
            .then(response => {
                const transactionsResponse = response.data;

                const transactionFormated = formatValues(transactionsResponse);
                setTransactions(transactionFormated);
            })
    }

    async function createTransaction(transactionCreate: TransactionCreate) {

        const response = await api.post<Transaction[]>('/transactions', transactionCreate);

        const newTransactions = response.data;

        console.log('response.data', response.data);


        newTransactions.forEach(transaction => {
            const datePayment = new Date(transaction.datePayment);

            if (
                datePayment.getFullYear() === dateSearch.getFullYear() &&
                datePayment.getMonth() === dateSearch.getMonth()
            ) {
                const [transactionFormated] = formatValues([transaction]);
                setTransactions([...transactions, transactionFormated]);
            }
        });
    }

    async function deleteTransaction(transactionId: number) {
        await api.delete(`transactions/${transactionId}`)
        const transactionIndex = transactions.findIndex(transaction => transaction.id === transactionId);

        if (transactionIndex >= 0) {
            transactions.splice(transactionIndex, 1)
            setTransactions([...transactions])
        }
    }

    function formatValues(transactionsList: Transaction[]) {
        transactionsList.forEach(transaction => {
            transaction.amountStr = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(transaction.amount);

            transaction.datePaymentStr = new Intl.DateTimeFormat('pt-BR')
                .format(new Date(transaction.datePayment))
        });
        return transactionsList;
    }

    return (
        <TransactionContext.Provider value={{
            transactions,
            dateSearch,
            typeSearch,
            loadTransactions,
            createTransaction,
            deleteTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    );
}

export function useTransaction() {
    const context = useContext(TransactionContext);
    return context;
}
