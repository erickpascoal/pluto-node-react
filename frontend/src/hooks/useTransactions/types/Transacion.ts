
export interface Transaction {
    id: number;
    title: string;
    type: string;
    amount: number;
    amountStr: string;
    category: string;
    datePayment: Date;
    datePaymentStr: string;
    installment: number;
}