import { DashboardLayout } from "../../../components/layout/DashboardLayout/DashboardLayout";
import UnauthenticatedRoute from "../../../routes/routes";
import { Admin } from "../pages/Admin/Admin";
export const AdminRoutes = [
  {
    path: "/manage-companies/admins",
    page: Admin,
    layout: DashboardLayout,
    name: "Reporting",
  },
  {
    path: "/manage-users/admins",
    page: Admin,
    layout: DashboardLayout,
    name: "users",
  },
];

export const NavbarData = {
//   users: {
//     path: "/manage-users/admin",
//     page: Admin,
//     routeComponent: null,
//     layout: DashboardLayout,
//     name: "Users",
//   },
  empty: {
    path: "",
    page: null,
    layout: DashboardLayout,
    name: "",
  },
};

const InvestorRouter = UnauthenticatedRoute([...AdminRoutes]);

export default InvestorRouter;
