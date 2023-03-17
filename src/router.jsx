import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    // eslint-disable-next-line react/react-in-jsx-scope
    element: <Home />,
  },
]);

export default router;
