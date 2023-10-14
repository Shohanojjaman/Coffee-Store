import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';

const MainRoutes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <>Home</>,
      },
    ],
  },
]);

export default MainRoutes;
