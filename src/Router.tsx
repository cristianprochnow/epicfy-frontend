import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFound } from './screens/NotFound';

const routes = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound />,
    element: <div>Home</div>,
    children: []
  },
  {
    path: '/login',
    errorElement: <NotFound />,
    element: <div>Login</div>
  },
  {
    path: '/register',
    errorElement: <NotFound />,
    element: <div>Register</div>,
  }
]);

export function Router() {
  return <RouterProvider router={routes} />
}