/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type FC, useState } from "react";
import { RecoverySchema } from "../../utils/Schemas/LoginSchemas";
import { Button } from "../../../../components/ui/Button";
import { PasswordInput } from "../../../../components/forms/PasswordInput";
import { getLocalStorage } from "../../../../utils/local-storage";
import { Input } from "../../../../components/forms/Input";
import Alert from "react-bootstrap/Alert";
import { LoginTitle } from "../LoginTitle";
import { recoveryPasswordField } from "../../utils/input-fields";
import type { RecoveryPassword } from "../../types/validations";
import { useNavigate } from "@tanstack/router";
import axios from "axios";
import React from "react";
import "./RecoveryPassword.css";

type RecoveryPasswordFormData = {
  password: string;
  confirmPassword: string;
};

type RecoveryPasswordFormProps = {};

export const recoveryPasswordForm: FC<RecoveryPasswordFormProps> = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<string | null>(null);
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const codeResetPassword = getLocalStorage("codeResetPassword");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(RecoverySchema),
  });

  const goLogin = (): void => {
    void navigate({ to: `/login` });
  };

  const go2fa = (): void => {
    // const componentName = "recoveryPasswordForm";
    // void navigate({ to: `/successProcess`, state: { componentName } });
  };

  const onSubmit: SubmitHandler<any> = async (
    data: RecoveryPassword
  ): Promise<void> => {
    try {
      // console.log("Enter here");

      const apiUrl = `http://localhost:3000/reset-password/${codeResetPassword}`;;
      console.log("What is data ---> ", data);
      const response = await axios.post(apiUrl, data);
      console.log("Response Data:", response.data);
      void navigate({ to: `/successProcess` });

    } catch (error) {
      console.log(error);
      setLoginError("reset-password failed. Please check your credentials.");
    }
  };

  return (
    <div className="recoveryPasswordForm">
      <div className="flex flex-col items-right gap-3 h-full w-full">
        <LoginTitle
          title={"Forgot Password!"}
          subTitle={"Enter a new secure password"}
        >
          <hr className=" w-full" />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full h-full flex flex-col justify-between"
          >
            <div className="flex  flex-col justify-between w-full  gap-8 textInput">
              <PasswordInput
                register={register(recoveryPasswordField?.password)}
                label="Create Password"
                placeholder="Enter Password"
                required
                error={errors[recoveryPasswordField?.recoveryPassword]?.message}
              />
              <PasswordInput
                register={register(recoveryPasswordField?.recoveryPassword)}
                label="Confirm Password"
                placeholder="Enter Password"
                required
                error={errors[recoveryPasswordField?.recoveryPassword]?.message}
              />
              {loginError && <Message severity="error" text={loginError} />}
            </div>

            <div className="flex flex-col gap-1 buttonText">
              <Button
                type="submit"
                buttonText="Confirm"
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
