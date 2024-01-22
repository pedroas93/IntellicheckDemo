import { recoveryPasswordForm } from './../components/RecoveryPassword/RecoveryPassword';
export type LoginFields = {
  userName?: string;
  email?: string;
  password: string;
  isTemporalUser?: boolean;
  expirationTime?: string;
  role?: string;
  companyName?: string;
};

export type PasswordValidations = {
  message: string;
  complete: boolean;
};

export type RecoveryPassword = {
  password: string;
  recoveryPassword: string;
};

export type ForgotPassword = {
  email?: string;
};

export type RegisterFields = {
  email?: string;
  password: string;
  repeatPassword: string;
};
