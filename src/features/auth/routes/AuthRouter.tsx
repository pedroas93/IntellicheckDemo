import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { HomeAdmin } from "../pages/HomeAdmin";
import { HomeUser} from "../pages/HomeUser";
import { LoginLayout } from "../../../components/layout/Login";
import UnauthenticatedRoute from "../../../routes/routes";

export const AuthRoutesNames = {
	login: "/login",
	register:"/register",
	homeAdmin:"/homeAdmin",
	homeUser:"/homeUser",
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
		path: `${AuthRoutesNames.homeUser}`,
		page: HomeUser,
		layout: LoginLayout,
	},
];

const AuthRouter = UnauthenticatedRoute(AuthRoutes);

export default AuthRouter;
