/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type FC, useState } from "react";
import { LoginSchema } from "../../utils/Schemas/LoginSchemas";
import { Button } from "../../../../components/ui/Button";
import { PasswordInput } from "../../../../components/forms/PasswordInput";
import { Input } from "../../../../components/forms/Input";
import { Message } from "primereact/message";
import { LoginTitle } from "../LoginTitle";
import { loginFields } from "../../utils/input-fields";
import type { LoginFields } from "../../types/validations";
import { useNavigate } from "@tanstack/router";
import axios from "axios";
import React from "react";
import "./register.css";

type LoginData = {
  email: string;
  password: string;
};

type RegisterFormProps = {
};

export const RegisterForm: FC<RegisterFormProps> = () => {
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
    <div className="RegisterForm">
      <div className="flex flex-col items-right  gap-3 h-full w-full">
        <LoginTitle
          title={"Welcome!"}
          subTitle={"Please enter your login credentials to proceed"}
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
                register={register(loginFields?.email)}
                label="Email Address"
                placeholder="Enter Email Address"
                required
                error={errors[loginFields?.email]?.message}
              />
              <PasswordInput
                register={register(loginFields?.password)}
                label="Create Password"
                placeholder="Enter Password"
                required
                error={errors[loginFields?.password]?.message}
              />
              {loginError && <Message severity="error" text={loginError} />}
            </div>
            <div className="flex flex-col gap-1 buttonText">
              <Button
                type="submit"
                buttonText="Sign Up"
                className="bg-primary-500 h-12"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div
                onClick={(): void => {
                  SignUp();
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
