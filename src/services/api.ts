import axios, { AxiosError } from 'axios';

export const api = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL
});

export function getError(exception: unknown): string {
  let message = '';

  if (exception instanceof AxiosError) {
    if (exception.response) {
      message = exception.response.data.error;
    }
  } else if (exception instanceof Error) {
    message = exception.message;
  } else {
    message = String(exception);
  }

  return message;
}