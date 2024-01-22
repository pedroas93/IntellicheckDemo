/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type FC, useState } from "react";
import { ForgotPasswordSchema } from "../../utils/Schemas/LoginSchemas";
import { Button } from "../../../../components/ui/Button";
import { PasswordInput } from "../../../../components/forms/PasswordInput";
import { Input } from "../../../../components/forms/Input";
import Alert from "react-bootstrap/Alert";
import { LoginTitle } from "../LoginTitle";
import { forgotPasswordField } from "../../utils/input-fields";
import type { ForgotPassword } from "../../types/validations";
import { useNavigate } from "@tanstack/router";
import axios from "axios";
import React from "react";
import "./ForgotPassword.css";

type ForgotPasswordFormnData = {
  email: string;
  password: string;
};

type ForgotPasswordFormProps = {};

export const ForgotPasswordForm: FC<ForgotPasswordFormProps> = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(ForgotPasswordSchema),
  });

  const goLogin = (): void => {
    void navigate({ to: `/login` });
  };

  const go2fa = (): void => {
    const componentName = "Login";

    void navigate({ to: `/reset-password-mfa`, state: { componentName } });
  };

  const onSubmit: SubmitHandler<any> = async (
    data: ForgotPassword
  ): Promise<void> => {
    try {
      console.log("ENTER HERE IN FORGOT PASSWORD");
      const apiUrl = "http://localhost:3000/recovery-password";

      const response = await axios.post(apiUrl, data);
      console.log("Response Data:", response.data);
      void navigate({ to: `/reset-password-mfa`, state: "ForgotPassword" });
      
    } catch (error) {
      console.log(error);
      setLoginError("Login failed. Please check your credentials.");
    }
  };
  return (
    <div className="ForgotPasswordForm">
      <div className="flex flex-col items-right  gap-3 h-full w-full">
        <LoginTitle
          title={"Forgot Password !"}
          subTitle={"Please enter your email to receive a reset link"}
        >
          <hr className=" w-full" />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full h-full flex flex-col justify-between"
          >
            <div className="flex  flex-col justify-between w-full  gap-8 textInput">
              <Input
                register={register(forgotPasswordField?.email)}
                label="Email Address"
                placeholder="Enter Email Address"
                required
                error={errors[forgotPasswordField?.email]?.message}
              />
              {loginError && <Alert variant="danger">{loginError}</Alert>}
            </div>
            <div className="flex flex-col gap-1 buttonText">
              <Button
                type="submit"
                buttonText="Reset"
                className="bg-primary-500 h-12"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div
                onClick={(): void => {
                  goLogin();
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
