import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import AddCoffee from '../Pages/AddCoffee';
import Home from '../Pages/Home';
import ProductDetails from '../Pages/ProductDetails';
import UpdateCoffee from '../Pages/UpdateCoffee';

const MainRoutes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('https://coffee-store-backend-auh67h67g-shohanojjaman-emons-projects.vercel.app/coffee'),
      },
      {
        path: '/addcoffee',
        element: <AddCoffee />,
      },
      {
        path: '/coffee/:id',
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`https://coffee-store-backend-auh67h67g-shohanojjaman-emons-projects.vercel.app/coffee/${params.id}`),
      },
      {
        path: '/update/:id',
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(`https://coffee-store-backend-auh67h67g-shohanojjaman-emons-projects.vercel.app/coffee/${params.id}`),
      },
    ],
  },
]);

export default MainRoutes;
