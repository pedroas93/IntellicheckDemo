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
import "./login.css";

type LoginData = {
  email: string;
  password: string;
};

type LoginFormProps = {
  handleSuccessLogin?: (data: LoginData) => void;
};

export const LoginForm: FC<LoginFormProps> = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(LoginSchema),
  });

  const signUp = (): void => {
    void navigate({ to: `/register` });
  };

  const handleForgotPassword = (): void => {
    void navigate({ to: `/forgotPassword` });
  };

  const onSubmit: SubmitHandler<any> = async (
    data: LoginFields
  ): Promise<void> => {
    try {
      const apiUrl = "https://intellicheckbackend-production.up.railway.app/login";

      console.log("What is data ---> ", data);

      const response = await axios.post(apiUrl, data);
      console.log("Response Data:", response.data);

      if ((response.data.role = "superAdmin")) {
      const componentName = "Login";

      void navigate({ to: `/secondFAAdmina`, state: { componentName } });
      } else {
        void navigate({ to: `/homeUser` });
      }
    } catch (error) {
      console.log(error);
      setLoginError("Login failed. Please check your credentials.");
    }
  };
  return (
    <div className="LoginForm">
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
                label="Email Address"
                placeholder="Enter Email Address"
                required
                error={errors[loginFields?.email]?.message}
              />
              <PasswordInput
                register={register(loginFields?.password)}
                label="Password"
                placeholder="Enter Password"
                required
                error={errors[loginFields?.password]?.message}
              />
              {loginError && <Message severity="error" text={loginError} />}
            </div>
            <div className=" texts-send-code ">
              <>
                <div
                  onClick={handleForgotPassword}
                  className="bg-secundary-200"
                >
                  ForgotPassword
                </div>
              </>
            </div>
            <div className="flex flex-col gap-1 buttonText">
              <Button
                type="submit"
                buttonText="Login"
                className="bg-primary-500 h-12"
              />
            </div>
            <div className="flex flex-col gap-1">
              {/* <div
                onClick={(): void => {
                  signUp();
                }}
                className="bg-secundary-100"
              >
                Sign up
              </div> */}
            </div>
          </form>
        </LoginTitle>
      </div>
    </div>
  );
};
