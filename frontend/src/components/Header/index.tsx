import { useState } from 'react';
import logoImg from '../../assets/images/logo.svg'
import { Container, Content } from './styles'
import { addMonths, subMonths, format, parseISO } from 'date-fns'
import { useTransaction } from '../../hooks/useTransactions';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {

    const { loadTransactions } = useTransaction();

    const [dateMonth, setDateMonth] = useState(format(new Date(), 'yyyy-MM'));

    function handleChangeDateMonth(value: string) {
        setDateMonth(value);
        loadTransactions(value);
    }

    function handleAddMonth() {
        const newDate = addMonths(parseISO(dateMonth), 1);
        const dateFormated = format(newDate, 'yyyy-MM');
        setDateMonth(dateFormated);
        loadTransactions(dateFormated);
    }

    function handleSubMonth() {
        const newDate = subMonths(parseISO(dateMonth), 1);
        const dateFormated = format(newDate, 'yyyy-MM');
        setDateMonth(dateFormated);
        loadTransactions(dateFormated);
    }

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="pluto" />
                <div>
                    <i className="fa fa-chevron-left" onClick={handleSubMonth}></i>
                    <input type="month" value={dateMonth} onChange={(event) => handleChangeDateMonth(event.target.value)} />
                    <i className="fa fa-chevron-right" onClick={handleAddMonth}></i>
                </div>
                <button onClick={onOpenNewTransactionModal}>Nova transação</button>
            </Content>
        </Container>
    );
}