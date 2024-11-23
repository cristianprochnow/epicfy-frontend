import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './screens/Login';
import { NotFound } from './screens/NotFound';
import { Register } from './screens/Register';
import { Search } from './screens/Search';

const routes = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound />,
    element: <Search />,
    children: []
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
  }
]);

export function Router() {
  return <RouterProvider router={routes} />
}