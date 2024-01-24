import { type FC } from "react";
import { HomeAdminForm } from "../../../admin/components/HomeAdmin/HomeAdmin";
import React from "react";

export const HomeAdmin: FC = () => {
  return (
    <div className="flex flex-col items-center  gap-3 h-full w-full">
      <HomeAdminForm />
    </div>
  );
};
