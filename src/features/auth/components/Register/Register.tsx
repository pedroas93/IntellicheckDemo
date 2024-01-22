/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type FC, useState } from "react";
import { RegisterSchema } from "../../utils/Schemas/LoginSchemas";
import { Button } from "../../../../components/ui/Button";
import { PasswordInput } from "../../../../components/forms/PasswordInput";
import { Input } from "../../../../components/forms/Input";
import Alert from "react-bootstrap/Alert";
import { LoginTitle } from "../LoginTitle";
import { registerFields } from "../../utils/input-fields";
import type { RegisterFields } from "../../types/validations";
import { useNavigate } from "@tanstack/router";
import axios from "axios";
import React from "react";
import "./register.css";

type LoginData = {
  email: string;
  password: string;
};

type RegisterFormProps = {};

export const RegisterForm: FC<RegisterFormProps> = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(RegisterSchema),
  });

  const goLogin = (): void => {
    void navigate({ to: `/login` });
  };

  const go2fa = (): void => {
    const componentName = "Register";

    void navigate({ to: `/successProcess`, state: { componentName } });
  };

  const onSubmit: SubmitHandler<any> = async (
    data: RegisterFields
  ): Promise<void> => {
    try {
      // console.log('Enter here ?? ', data.password, data.repeatPassword);
      // if(data.password === data.repeatPassword){
      //   const apiUrl = "http://localhost:3000/register";

      //   const credentials = {
      //     userName: "Pedro123",
      //     mail: data.email,
      //     password: data.password,
      //     role: "company",
      //     phoneNumber: "+573106522555"
      //   }

      //   const response = await axios.post(apiUrl, credentials);
      //   console.log("Response Data:", response.data);
      const componentName = "Register";

      void navigate({ to: `/secondFARegister`, state: { componentName } });
      // }
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
              {/* <Input
                register={register(registerFields?.email)}
                label="User Name"
                placeholder="User Name"
                required
                error={errors[registerFields?.email]?.message}
              /> */}
              <Input
                register={register(registerFields?.email)}
                label="Email Address"
                placeholder="Enter Email Address"
                required
                error={errors[registerFields?.email]?.message}
              />
              {/* <PasswordInput
                register={register(registerFields?.password)}
                label="Create Password"
                placeholder="Enter Password"
                required
                error={errors[registerFields?.password]?.message}
              />
              <PasswordInput
                register={register(registerFields?.repeatPassword)}
                label="Confirmation Create Password"
                placeholder="Enter Password"
                required
                error={errors[registerFields?.repeatPassword]?.message}
              /> */}
              {loginError && <Alert variant="danger">{loginError}</Alert>}
            </div>
            <div className="flex flex-col gap-1 buttonText">
              <Button
                type="submit"
                buttonText="Create Password"
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
