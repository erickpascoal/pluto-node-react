import { format } from 'date-fns';
import { parseISO } from 'date-fns';
import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/images/close.svg'
import incomeImg from '../../assets/images/income.svg'
import outcomeImg from '../../assets/images/outcome.svg'
import { useTransaction } from '../../hooks/useTransactions';

import { Form, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    const { createTransaction } = useTransaction();

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState('deposit');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
    const [installment, setInstallment] = useState(1);

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            type,
            category,
            datePayment: parseISO(date),
            installment
        });

        clearForm();
        onRequestClose();
    }

    function clearForm() {
        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button onClick={onRequestClose} className="react-modal-close">
                <img src={closeImg} alt="Fechar modal" />
            </button>

            <Form onSubmit={handleCreateNewTransaction} >
                <h2>Cadastrar Transação</h2>

                <input
                    placeholder="Título"
                    onChange={(event) => setTitle(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Valor"
                    onChange={(event) => setAmount(Number(event.target.value))}
                />

                <input
                    placeholder="Parcelas"
                    type="number"
                    value={installment}
                    onChange={(event) => setInstallment(Number(event.target.value))}
                />

                <input
                    placeholder="Categoria"
                    onChange={(event) => setCategory(event.target.value)}
                />

                <input
                    placeholder="Data"
                    type="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <button type="submit"> Cadastrar</button>
            </Form>
        </Modal>
    );
}