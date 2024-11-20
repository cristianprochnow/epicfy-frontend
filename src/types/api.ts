export type ApiErrorResponse = {
  ok: boolean;
  error?: string
};

export type ApiSuccessResponse = {
  ok: boolean;
  data?: unknown;
};

export type ApiUserCreationResponse = ApiErrorResponse & ApiSuccessResponse & {
  data?: {
    user: number
  };
};