import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { LoginLayout } from "../../../components/layout/Login";
import UnauthenticatedRoute from "../../../routes/routes";
import { Home } from "../pages/Home/Home";

export const AuthRoutesNames = {
	login: "/login",
	register:"/register"
};

const AuthRoutes = [
	{
		path: `/`,
		page: Home,
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
];

const AuthRouter = UnauthenticatedRoute(AuthRoutes);

export default AuthRouter;
