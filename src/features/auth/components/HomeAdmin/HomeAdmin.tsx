/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type FC, useState } from "react";
import { LoginSchema } from "../../utils/Schemas/LoginSchemas";
import { Button } from "../../../../components/ui/Button";
import { Input } from "../../../../components/forms/Input";
import { LoginTitle } from "../LoginTitle";
import { loginFields } from "../../utils/input-fields";
import type { LoginFields } from "../../types/validations";
import { useNavigate } from "@tanstack/router";
import axios from "axios";
import React from "react";
import "./homeAdmin.css";

type LoginData = {
  email: string;
  password: string;
};

type HomeAdminFormProps = {};

export const HomeAdminForm: FC<HomeAdminFormProps> = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(LoginSchema),
  });

  const goToLogin = (): void => {
    void navigate({ to: `/login` });
  };

  const onSubmit: SubmitHandler<any> = async (
    data: LoginFields
  ): Promise<void> => {
    try {
      const apiUrl = "https://authsystem-ysxx.onrender.com/auth-user";

      const credentials = {
        userName: "juanperez",
        email: "juan@gmail.com",
        password: "12345678",
        isTemporalUser: true,
        expirationTime: "3",
        role: "admin",
        companyName: "pepsico",
      };

      const response = await axios.post(apiUrl, credentials);
      console.log("Response Data:", response.data);
    } catch (error) {
      console.log(error);
      setLoginError("Login failed. Please check your credentials.");
    }
  };
  return (
    <div className="HomeAdminForm">
      <div className="flex flex-col items-right  gap-3 h-full w-full">
        <LoginTitle
          title={"Welcome Admin!"}
          subTitle={"Welcome again Admin do you want create a new company?"}
        >
          <hr className=" w-full" />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full h-full flex flex-col justify-between"
          >
            <div className="flex  flex-col justify-between w-full  gap-8 textInput">
              <Input
                register={register(loginFields?.email)}
                label="User Name"
                placeholder="User Name"
                required
                error={errors[loginFields?.email]?.message}
              />
              <Input
                register={register(loginFields?.isTemporalUser)}
                label="User Name"
                placeholder="User Name"
                required
                error={errors[loginFields?.email]?.message}
              />
              <Input
                register={register(loginFields?.expirationTime)}
                label="User Name"
                placeholder="User Name"
                required
                error={errors[loginFields?.email]?.message}
              />
              <Input
                register={register(loginFields?.role)}
                label="User Name"
                placeholder="User Name"
                required
                error={errors[loginFields?.email]?.message}
              />
              <Input
                register={register(loginFields?.companyName)}
                label="User Name"
                placeholder="User Name"
                required
                error={errors[loginFields?.email]?.message}
              />
            </div>
            <div className="flex flex-col gap-1 buttonText">
              <Button
                type="submit"
                buttonText="Create"
                className="bg-primary-500 h-12"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div
                onClick={(): void => {
                  goToLogin();
                }}
                className="bg-secundary-100"
              >
                Back
              </div>
            </div>
          </form>
        </LoginTitle>
      </div>
    </div>
  );
};
