export interface IUserSchema {
  username: string;
  full_name: string;
  email: string;
  phone: string;
  password_changed_at: string;
  created_at: string;
}

export interface IUserLoginRequestBody {
  username: string;
  password: string;
}

export interface IUserLoginResponse {
  session_id: string;
  access_token: string;
  access_token_expires_at: string;
  refresh_token: string;
  refresh_token_expires_at: string;
  user: IUserSchema;
}

export interface IUserRegisterRequestBody {
  username: string;
  full_name: string;
  email: string;
  phone: string;
  password: string;
}

export interface IUserRegisterResponse {
  username: string;
  full_name: string;
  email: string;
  phone: string;
  created_at: string;
  password_changed_at: string;
}

export interface IUserUpdateRequestBody {
  full_name: string;
  email: string;
  phone: string;
}

export interface IUserUpdateResponse {
  username: string;
  hashed_password: string;
  full_name: string;
  email: string;
  phone: string;
  role: string;
  isBooking: boolean;
  password_changed_at: string;
  created_at: string;
  reset_password_token: string;
  rspassword_token_expired_at: string;
}