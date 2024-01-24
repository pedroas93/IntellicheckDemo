/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { type FC, type ReactNode, useEffect, useState } from "react";
// import "@/assets/images/png/LogoGold_2x.png";
import "./DashboardLayout.css";
import Logo from "../../../assets/Images/png/Logo.png";
import { Link, useNavigate } from "@tanstack/router";
// import { InvestorRoutes } from "@/features/investor/routes/InvestorRouter.tsx";
import React from "react";
import { AdminRoutes } from "../../../features/admin/routes/AdminRouter";

type Props = {
  children?: ReactNode;
};

export const DashboardLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen bg-gradient relative containerDashboard">
      <div className="flex items-center justify-between px-12 py-4 wrapper-top-bar">
        <img src={Logo} alt="Logo" />
        <ul className="flex flex-direction flex-col space-x-2 ul-dashboard">
          {AdminRoutes.map(
            (route: {
              path: string;
              page: FC;
              layout: FC<Props>;
              name: string;
            }) =>
              route.name && (
                <Link
                  key={route.path}
                  to={route.path}
                  className="link-text font-inter font-semibold px-4 py-2"
                  activeProps={{ className: "text-white" }}
                  inactiveProps={{ className: "opacity-40 text-gray-1000" }}
                  params={{}}
                  search={{}}
                >
                  {route.name}
                </Link>
              )
          )}
        </ul>
      </div>
      <div className="flex m-2 h-screen overflow-y-auto">{children}</div>
    </div>
  );
};
