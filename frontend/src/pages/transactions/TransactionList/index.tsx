import { useState } from "react";
import { TransactionFormModal } from './TransactionFormModal'
import { TransactionsTable } from "./TransactionsTable";
import { TransactionSummary } from "./TransactionSummary";
import { TransactionHeader } from './TransactionHeader'

import { Container } from './styles'

export function TransactionList() {
    const [isNewTransactionModalOpen, setIsTransactionFormModalOpen] = useState(false);


    function handleOpenTransactionFormModal() {
        setIsTransactionFormModalOpen(true)
    }

    function handleCloseTransactionFormModal() {
        setIsTransactionFormModalOpen(false)
    }


    return (
        <Container>
            <TransactionHeader onOpenTransactionFormModal={handleOpenTransactionFormModal} />
            <TransactionSummary />
            <TransactionsTable />

            <TransactionFormModal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseTransactionFormModal}
            />

        </Container>
    )
}