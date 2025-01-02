import { createBrowserRouter } from 'react-router-dom';
import TestCodePage from './pages/testCodePage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      children: [
        {
          index: true,
          element: <TestCodePage />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

export default router;
