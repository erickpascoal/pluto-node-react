import { Transaction } from "./Transacion";
import { TransactionCreate } from "./TransactionCreate";

export interface TransactionContextData {
    transactions: Transaction[];
    dateSearch: Date;
    loadTransactions: (monthDate: string) => Promise<void>;
    createTransaction: (transaction: TransactionCreate) => Promise<void>;
    deleteTransaction: (transactionId: number) => Promise<void>;
}