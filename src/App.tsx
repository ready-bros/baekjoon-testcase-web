import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TestCodePage from './pages/testCodePage';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <TestCodePage />
    </QueryClientProvider>
  );
}

export default App;
