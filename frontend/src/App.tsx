
import { TransactionFormModal } from './pages/transactions/TransactionList/TransactionFormModal'
import { TransactionList } from './pages/transactions/TransactionList'

import { GlobalStyle } from './styles/GlobalStyle';
import { TransactionProvider } from './hooks/useTransactions';
import Routes from './routes';

function App() {

  return (
    <TransactionProvider>

      <Routes />

      <GlobalStyle />
    </TransactionProvider>
  );
}

export default App;
