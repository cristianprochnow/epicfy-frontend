import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './screens/Login';
import { NotFound } from './screens/NotFound';
import { Register } from './screens/Register';
import { Search } from './screens/Search';

const routes = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound />,
    element: <Search />
  },
  {
    path: '/login',
    errorElement: <NotFound />,
    element: <Login />
  },
  {
    path: '/register',
    errorElement: <NotFound />,
    element: <Register />,
  },
  {
    path: '/ideas',
    errorElement: <NotFound />,
    element: <div>Ideias</div>,
  },
  {
    path: '/ideas/:id',
    errorElement: <NotFound />,
    element: <div>Ideias com id</div>,
  },
]);

export function Router() {
  return <RouterProvider router={routes} />
}