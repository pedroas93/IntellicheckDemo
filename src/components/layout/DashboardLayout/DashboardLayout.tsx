/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { type FC, type ReactNode, useEffect, useState } from "react";
import "@/assets/images/png/LogoGold_2x.png";
import "./DashboardLayout.css";
import { Link, useNavigate } from "@tanstack/router";
// import { InvestorRoutes } from "@/features/investor/routes/InvestorRouter.tsx";
// import LogoGold from "@/assets/images/png/LogoGold.png";
import React from "react";

type Props = {
  children?: ReactNode;
};

export const DashboardLayout: FC<Props> = ({ children }) => {


  return (
    <div className="flex flex-col h-screen bg-gradient relative">
      <div className="flex items-center justify-between px-12 py-4">
        {/* <img src={LogoGold} alt="DKC Logo" /> */}
        <ul className="flex space-x-2">
          {/* {InvestorRoutes.map(
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
          )} */}
        </ul>
      </div>
    </div>
  );
};
