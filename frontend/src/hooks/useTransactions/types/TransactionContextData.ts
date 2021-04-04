import { Transaction } from "./Transacion";
import { TransactionCreate } from "./TransactionCreate";

export interface TransactionContextData {
    transactions: Transaction[];
    dateSearch: Date;
    typeSearch: string | undefined,
    loadTransactions: (date: Date, type?: string) => Promise<void>;
    createTransaction: (transaction: TransactionCreate) => Promise<void>;
    deleteTransaction: (transactionId: number) => Promise<void>;
}