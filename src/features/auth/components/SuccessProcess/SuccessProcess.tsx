/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type FC, useState } from "react";
import { LoginSchema } from "../../utils/Schemas/LoginSchemas";
import { Button } from "../../../../components/ui/Button";
import { LoginTitle } from "../LoginTitle";
import type { LoginFields } from "../../types/validations";
import { useNavigate } from "@tanstack/router";
import axios from "axios";
import React from "react";
import "./SuccessProcess.css";
// import DigitalKey from "../../../../assets/Images/png/DigitalKey.png";

type SuccessProcess = {};

export const SuccessProcess: FC<SuccessProcess> = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(LoginSchema),
  });

  const goLogin = (): void => {
    void navigate({ to: `/login` });
  };

  const go2fa = (): void => {
    const componentName = "Login";

    void navigate({ to: `/Login`, state: { componentName } });
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
    <div className="SuccessProcess">
      <div className="flex flex-col items-right  gap-3 h-full w-full">
        <LoginTitle
          title={"Success!"}
          subTitle={"The process was completed successfully, you can now login"}
        >
          <hr className=" w-full" />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full h-full flex flex-col justify-between"
          >
            <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            >
              <img
                // src={DigitalKey}
                alt="Description of the Image"
              />
            </div>

            <div className="flex flex-col gap-1 buttonText">
              <Button
                type="submit"
                buttonText="Login"
                className="bg-primary-500 h-12"
                onClick={(): void => {
                  go2fa();
                }}
              />
            </div>
          </form>
        </LoginTitle>
      </div>
    </div>
  );
};
