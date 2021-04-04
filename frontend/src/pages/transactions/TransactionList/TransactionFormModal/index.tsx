import { format } from 'date-fns';
import { parseISO } from 'date-fns';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../../../assets/images/close.svg'

import { Form, TransactionTypeContainer, RadioBox } from './styles';
import { useTransaction } from '../../../../hooks/useTransactions';
import { useForm } from 'react-hook-form';
import { Input } from '../../../../components/Input'

interface TransactionFormModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function TransactionFormModal({ isOpen, onRequestClose }: TransactionFormModalProps) {

    const { createTransaction, dateSearch } = useTransaction();

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const [type, setType] = useState('deposit');

    async function onSubmit({ title, amount, category, date, installment }: any) {

        await createTransaction({
            title,
            amount,
            type,
            category,
            datePayment: parseISO(date),
            installment
        });

        handeCloseModal();
    }

    function handeCloseModal() {
        reset();
        onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={handeCloseModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button onClick={handeCloseModal} className="react-modal-close">
                <img src={closeImg} alt="Fechar modal" />
            </button>

            <Form onSubmit={handleSubmit(onSubmit)} >
                <h2>Cadastrar Transação</h2>

                <TransactionTypeContainer>
                    <RadioBox
                        className="deposit"
                        type="button"
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <i className="fa fa-arrow-circle-o-up"></i>
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        className="withdraw"
                        type="button"
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <i className="fa fa-arrow-circle-o-down"></i>
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <Input
                    label="Título"
                    error={errors.title}
                    register={register('title', { required: true })}
                />

                <Input
                    label="Valor"
                    type="number"
                    error={errors.amount}
                    register={register('amount', { required: true })}
                />

                <Input
                    label="Categoria"
                    error={errors.category}
                    register={register('category', { required: true })}
                />

                <div className="row-2" >
                    <Input
                        label="Parcelas"
                        type="number"
                        defaultValue={1}
                        error={errors.installment}
                        register={register('installment', { required: true })}
                    />

                    <Input
                        label="Data"
                        error={errors.date}
                        type="date"
                        defaultValue={format(dateSearch, 'yyyy-MM-dd')}
                        register={register('date', { required: true })}
                    />
                </div>

                <button type="submit"> Cadastrar</button>
            </Form>
        </Modal>
    );
}