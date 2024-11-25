import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Idea } from './screens/Idea';
import { Ideas } from './screens/Ideas';
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
    element: <Ideas />,
  },
  {
    path: '/ideas/:id',
    errorElement: <NotFound />,
    element: <Idea />,
  },
]);

export function Router() {
  return <RouterProvider router={routes} />
}