import { type FC } from "react";
import { HomeUserForm } from "../../components/HomeUser/HomeUser";
import React from "react";

export const HomeUser: FC = () => {
  return (
    <div className="flex flex-col items-center  gap-3 h-full w-full">
      <HomeUserForm />
    </div>
  );
};
