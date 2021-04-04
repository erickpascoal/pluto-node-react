import { addMonths, parseISO, subMonths } from "date-fns";
import { format } from "date-fns";
import { useState } from "react";
import { useTransaction } from "../../../../hooks/useTransactions";

import { Container, Calendar } from './styles'

interface TransactionHeaderProps {
    onOpenTransactionFormModal: () => void;
}

export function TransactionHeader({ onOpenTransactionFormModal }: TransactionHeaderProps) {

    const { loadTransactions } = useTransaction();

    const [dateMonth, setDateMonth] = useState(format(new Date(), 'yyyy-MM'));

    function handleChangeDateMonth(value: string) {
        setDateMonth(value);
        loadTransactions(new Date(value));
    }

    function handleAddMonth() {
        const newDate = addMonths(parseISO(dateMonth), 1);
        const dateFormated = format(newDate, 'yyyy-MM');
        setDateMonth(dateFormated);
        loadTransactions(newDate);
    }

    function handleSubMonth() {
        const newDate = subMonths(parseISO(dateMonth), 1);
        const dateFormated = format(newDate, 'yyyy-MM');
        setDateMonth(dateFormated);
        loadTransactions(newDate);
    }

    return (
        <Container>
            <span>Transações</span>

            <Calendar>
                <button onClick={handleSubMonth}>
                    <i className="fa fa-chevron-left"></i>
                </button>
                <input type="month" value={dateMonth} onChange={(event) => handleChangeDateMonth(event.target.value)} />
                <button onClick={handleAddMonth}>
                    <i className="fa fa-chevron-right" ></i>
                </button>
            </Calendar>

            <button onClick={onOpenTransactionFormModal}>Adicionar</button>
        </Container>
    );
}