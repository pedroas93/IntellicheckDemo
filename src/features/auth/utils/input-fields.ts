import type {
	LoginFields,
	RecoveryPassword,
	ForgotPassword,
	RegisterFields
} from "../types/validations";


export const loginFields: LoginFields = {
	email: "email",
	password: "password",
};

export const recoveryPasswordField: RecoveryPassword = {
	password: "password",
	recoveryPassword: "recoveryPassword",
};

export const forgotPasswordField: ForgotPassword = {
	email: "email",
};

export const registerFields: RegisterFields = {
	email: "email",
	password: "password",
	repeatPassword: "repeatPassword"
};

