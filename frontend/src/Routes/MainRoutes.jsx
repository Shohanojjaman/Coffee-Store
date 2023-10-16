import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import AddCoffee from '../Pages/AddCoffee';
import Home from '../Pages/Home';

const MainRoutes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('http://localhost:8080/coffee'),
      },
      {
        path: '/addcoffee',
        element: <AddCoffee />,
      },
    ],
  },
]);

export default MainRoutes;
