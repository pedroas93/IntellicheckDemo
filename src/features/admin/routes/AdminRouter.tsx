import { DashboardLayout } from "../../../components/layout/DashboardLayout/DashboardLayout";
import { AdminRoute } from "../../../routes/routes";
import { Users } from "../components/users/Users";
export const AdminRoutes = [
	{
		path: "/investors/reporting",
		page: Users,
		layout: DashboardLayout,
		name: "Reporting",
	},
];

// const profileRoutes = [
// 	{
// 		path: "/investors/Profile",
// 		page: Profile,
// 		routeComponent: null,
// 		layout: DashboardLayout,
// 		name: "Manage Users",
// 	},
// ];

const InvestorRouter = AdminRoute([...AdminRoutes]);

export default InvestorRouter;
