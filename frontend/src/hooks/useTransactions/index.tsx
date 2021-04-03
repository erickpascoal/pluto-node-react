import { format } from 'date-fns';
import { parseISO } from 'date-fns/esm';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
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

    useEffect(() => {
        loadTransactions(format(new Date(), 'yyyy-MM'));
    }, []);

    async function loadTransactions(monthDate: string) {
        api.get<Transaction[]>(`transactions/${monthDate}`).then(response => {
            const transactionsResponse = response.data;

            const transactionFormated = formatValues(transactionsResponse);

            setTransactions(transactionFormated);
            setDateSearch(parseISO(monthDate));
        })
    }

    async function createTransaction(transactionCreate: TransactionCreate) {

        const response = await api.post<Transaction[]>('/transactions', transactionCreate);

        const newTransactions = response.data;

        newTransactions.forEach(transaction => {
            const datePayment = new Date(transaction.datePayment);

            if (
                datePayment.getFullYear() === dateSearch.getFullYear() &&
                datePayment.getMonth() === dateSearch.getMonth()
            ) {
                const [transactionFormated] = formatValues([transaction]);
                setTransactions([...transactions, transactionFormated])
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
        <TransactionContext.Provider value={{ transactions, dateSearch, loadTransactions, createTransaction, deleteTransaction }}>
            {children}
        </TransactionContext.Provider>
    );
}

export function useTransaction() {
    const context = useContext(TransactionContext);
    return context;
}
