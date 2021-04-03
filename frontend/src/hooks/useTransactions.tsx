import { format } from 'date-fns';
import { parseISO } from 'date-fns/esm';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';


interface TransactionContextData {
    transactions: Transaction[];
    dateSearch: Date;
    createTransaction: (transaction: TransactionCreate) => Promise<void>;
    loadTransactions: (monthDate: string) => Promise<void>;
}

interface TransactionProviderProps {
    children: ReactNode;
}

interface Transaction {
    id: number;
    title: string;
    type: string;
    amount: number;
    category: string;
    datePayment: Date;
    installment: number;
}

interface TransactionCreate {
    title: string;
    type: string;
    amount: number;
    category: string;
    datePayment: Date;
    installment: number;
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
            setTransactions(response.data);
            setDateSearch(parseISO(monthDate));
        })
    }

    async function createTransaction(transactionCreate: TransactionCreate) {

        const response = await api.post<Transaction>('/transactions', transactionCreate);

        const transaction = response.data;

        const datePayment = new Date(transaction.datePayment);

        if (
            datePayment.getFullYear() === dateSearch.getFullYear() &&
            datePayment.getMonth() === dateSearch.getMonth()
        ) {
            setTransactions([...transactions, transaction])
        }

    }

    return (
        <TransactionContext.Provider value={{ transactions, dateSearch, createTransaction, loadTransactions }}>
            {children}
        </TransactionContext.Provider>
    );
}

export function useTransaction() {
    const context = useContext(TransactionContext);
    return context;
}
