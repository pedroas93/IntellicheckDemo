import { Router } from "@tanstack/router";

import AuthRouter from "../features/auth/routes/AuthRouter";
import AdminRouter from "../features/admin/routes/AdminRouter";
import AppRouter from "./AppRouter";
import { RootRoute } from "./RootRoute";

//array of all routes
const allRoutes = [
	...AppRouter,
	...AdminRouter,
	...AuthRouter,
];

const routeTree = RootRoute.addChildren([...allRoutes]);

const router = new Router({ routeTree });

declare module "@tanstack/router" {
	interface Register {
		// This infers the type of our router and registers it across your entire project
		router: typeof router;
	}
}

export { router };
