/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type FC, useState } from "react";
import { LoginSchema } from "../../utils/Schemas/LoginSchemas";
import { LoginTitle } from "../LoginTitle";
import type { LoginFields } from "../../types/validations";
import { useNavigate } from "@tanstack/router";
import axios from "axios";
import React from "react";
import "./HomeUser.css";

type LoginData = {
  email: string;
  password: string;
};

type HomeUserFormProps = {
};

export const HomeUserForm: FC<HomeUserFormProps> = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(LoginSchema),
  });

  const SignUp = (): void => {
		void navigate({ to: `/login` });
	};

  const onSubmit: SubmitHandler<any> = async (
    data: LoginFields
  ): Promise<void> => {
    try {
      const apiUrl = "https://authsystem-ysxx.onrender.com/login";

      const credentials = {
        userName: "juanperez",
        password: "123password093",
      };

      const response = await axios.post(apiUrl, credentials);
      console.log("Response Data:", response.data);
    } catch (error) {
      console.log(error);
      setLoginError("Login failed. Please check your credentials.");
    }
  };
  return (
    <div className="HomeUserForm">
      <div className="flex flex-col items-right  gap-3 h-full w-full">
        <LoginTitle
          title={"Welcome back!"}
          subTitle={"You are now logged"}
        >
        </LoginTitle>
      </div>
    </div>
  );
};
