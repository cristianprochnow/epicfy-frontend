import { ToastContainer } from 'react-toastify';
import { Router } from './Router';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <>
      <ToastContainer toastStyle={{ fontSize: '1.4rem' }} />
      <Router />
    </>
  );
}