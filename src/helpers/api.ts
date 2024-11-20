import { AxiosError } from 'axios';

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