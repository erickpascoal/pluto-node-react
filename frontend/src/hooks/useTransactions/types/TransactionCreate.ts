

export interface TransactionCreate {
    title: string;
    type: string;
    amount: number;
    category: string;
    datePayment: Date;
    installment: number;
}
