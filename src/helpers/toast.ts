import { toast } from 'react-toastify';

export function success(message: string) {
  toast.dismiss();
  toast.success(message);
}

export function error(message: string) {
  toast.dismiss();
  toast.error(message);
}

export function loading(message: string) {
  toast.dismiss();
  toast.loading(message);
}