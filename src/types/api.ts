export type ApiErrorResponse = {
  ok: boolean;
  error?: string;
};

export type ApiSuccessResponse = {
  ok: boolean;
  data?: unknown;
};

export type ApiUserCreationResponse = ApiErrorResponse & ApiSuccessResponse & {
  data?: {
    user: number;
  };
};

export type ApiUserLoginResponse = ApiErrorResponse & ApiSuccessResponse & {
  data?: {
    token: string;
    user: number;
  };
};

export type ApiIdea = {
  id: number;
  title: string;
  description: string;
  status: string;
  is_pinned: boolean;
  created_at: string;
  updated_at: string;
};