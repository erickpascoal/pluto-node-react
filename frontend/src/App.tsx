
import { TransactionFormModal } from './pages/transactions/TransactionList/TransactionFormModal'
import { TransactionList } from './pages/transactions/TransactionList'

import { GlobalStyle } from './styles/GlobalStyle';
import { TransactionProvider } from './hooks/useTransactions';

function App() {

  return (
    <TransactionProvider>

      <TransactionList />

      <GlobalStyle />
    </TransactionProvider>
  );
}

export default App;
