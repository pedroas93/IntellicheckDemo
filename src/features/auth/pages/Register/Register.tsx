import { type FC } from "react";
import { RegisterForm } from "../../components/Register/Register";
import React from "react";

export const Register: FC = () => {
  return (
    <div className="flex flex-col items-center  gap-3 h-full w-full">
      <RegisterForm />
    </div>
  );
};
