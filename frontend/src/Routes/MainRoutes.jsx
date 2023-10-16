import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import AddCoffee from '../Pages/AddCoffee';
import Home from '../Pages/Home';
import ProductDetails from '../Pages/ProductDetails';

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
      {
        path: '/coffee/:id',
        element: <ProductDetails />,
        loader: ({ params }) => fetch(`http://localhost:8080/coffee/${params.id}`),
      },
    ],
  },
]);

export default MainRoutes;
