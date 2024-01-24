import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { HomeAdmin } from "../pages/HomeAdmin";
import { HomeUser } from "../pages/HomeUser";
import { LoginLayout } from "../../../components/layout/Login";
import UnauthenticatedRoute from "../../../routes/routes";
import { ResetPasswordMfa } from "../pages/ResetPasswordMfa";
import {secondFARegister} from "../pages/SecondFARegister"
import { ForgotPasswordForm } from "../components/ForgotPassword";
import { recoveryPasswordForm } from "../components/RecoveryPassword";
import { SuccessProcess } from "../components/SuccessProcess";
import { SecondFAAdmin } from "../pages/SecondFAAdmin";

export const AuthRoutesNames = {
  login: "/login",
  register: "/register",
  forgotPassword: "/forgotPassword",
  recoveryPassword: "/recoveryPassword",
  successProcess: "/successProcess",
  homeAdmin: "/homeAdmin",
  resetPasswordMfa: "/reset-password-mfa",
  secondFAAdmin: "/secondFAAdmina",
  homeUser: "/homeUser",
  secondFARegister: "/secondFARegister"
};

const AuthRoutes = [
  {
    path: `${AuthRoutesNames.homeAdmin}`,
    page: HomeAdmin,
    layout: LoginLayout,
  },
  {
    path: `${AuthRoutesNames.login}`,
    page: Login,
    layout: LoginLayout,
  },
  {
    path: `${AuthRoutesNames.register}`,
    page: Register,
    layout: LoginLayout,
  },
  {
    path: `${AuthRoutesNames.forgotPassword}`,
    page: ForgotPasswordForm,
    layout: LoginLayout,
  },
  {
    path: `${AuthRoutesNames.recoveryPassword}`,
    page: recoveryPasswordForm,
    layout: LoginLayout,
  },
  {
    path: `${AuthRoutesNames.successProcess}`,
    page: SuccessProcess,
    layout: LoginLayout,
  },
  {
    path: `${AuthRoutesNames.resetPasswordMfa}`,
    page: ResetPasswordMfa,
    layout: LoginLayout,
  },
  {
    path: `${AuthRoutesNames.secondFARegister}`,
    page: secondFARegister,
    layout: LoginLayout,
  },
  {
    path: `${AuthRoutesNames.homeUser}`,
    page: HomeUser,
    layout: LoginLayout,
  },
  {
    path: `${AuthRoutesNames.secondFAAdmin}`,
    page: SecondFAAdmin,
    layout: LoginLayout,
  },
];

const AuthRouter = UnauthenticatedRoute(AuthRoutes);

export default AuthRouter;
