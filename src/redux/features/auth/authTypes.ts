export type AuthUser = {
  id?: string;
  name?: string;
  email: string;
  role?: string;
};

export type AuthState = {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = {
  email: string;
  password: string;
};

export type AuthResponse = {
  user?: AuthUser;
  token?: string;
  accessToken?: string;
  message?: string;
};
