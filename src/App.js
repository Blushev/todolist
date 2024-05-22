import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TaskList } from './components/TaskList';

import { GlobalStyle } from './styles/GlobalStyles';

const queryClient = new QueryClient();

export const App = () => (
  <>
    <GlobalStyle />
    <QueryClientProvider client={queryClient}>
      <TaskList />
    </QueryClientProvider>
  </>
);

export default App;