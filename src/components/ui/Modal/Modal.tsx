import "./Modal.css";

import { type FC, ReactNode, useState } from "react";
import { useForm } from "react-hook-form";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "../../../components/forms/Input/Input.tsx";
import Modal from "react-bootstrap/Modal";
import axios from "axios";


import { Dialog } from "primereact/dialog";
import React from "react";
import { Button } from "../Button/Button.tsx";

export interface ModalProps {
  children?: ReactNode;
  minHeight?: string;
  onHide?: () => void;
  title?: string | ReactNode;
  visible?: boolean;
  width?: string;
  footer?: ReactNode;
  className?: string;
}

export const ModalComponent: FC<ModalProps> = ({
  children,
  minHeight,
  onHide,
  title,
  visible,
  width = "50vw",
  footer,
  className,
}) => {
  const [fullscreen, setFullscreen] = useState(true);

  const errorMessages = {
    minLength: "Too short",
    maxLength: "Too long",
    required: "Required",
    dontmatch: "The password doesn't match",
  };

  const handleShow = (visible): void => {
    setFullscreen(breakpoint);
    setShow(true);
  };

  type RecoveryPassword = {
    userName?: string;
    email?: string;
    password?: string;
    role?: string;
    phoneNumber?: string;
  };

  type ForgotPassword = {
    userName?: string;
    email?: string;
    password?: string;
    role?: string;
    phoneNumber?: string;
  };

  const recoveryPasswordField: ForgotPassword = {
    userName: "userName",
    email: "email",
    password: "password",
    role: "role",
    phoneNumber: "phoneNumber",
  };

  const RecoverySchema = z.object({
    [recoveryPasswordField?.userName]: z
      .string()
      .nonempty(errorMessages.required),
    [recoveryPasswordField?.email]: z.string().nonempty(errorMessages.required),
    [recoveryPasswordField?.password]: z.string().nonempty(errorMessages.required),
    [recoveryPasswordField?.role]: z.string().nonempty(errorMessages.required),
    [recoveryPasswordField?.phoneNumber]: z.string().nonempty(errorMessages.required),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(RecoverySchema),
  });

  const onSubmit: SubmitHandler<any> = async (
    data: ForgotPassword
  ): Promise<void> => {
    try {
      // const apiUrl = "http://localhost:3000/login";

      // console.log("What is data ---> ", data);

      // const response = await axios.post(apiUrl, data);
      // console.log("Response Data:", response.data);

      // if ((response.data.role = "superAdmin")) {
      //   const componentName = "Login";

      //   void navigate({ to: `/manage-users/admins`, state: { componentName } });
      // } else {
      //   void navigate({ to: `/homeUser` });
      // }

      console.log("ENTER HERE? --> ", data);

	  const apiUrl = "http://localhost:3000/register";
	  const response = await axios.post(apiUrl, data);

	  console.log('response ---> ', response)
	  onHide?.()

    } catch (error) {
      console.log(error);
      //   setLoginError("Login failed. Please check your credentials.");
    }
  };

  const forgotPasswordField: ForgotPassword = {
    userName: "userName",
    email: "email",
    password: "password",
    role: "role",
    phoneNumber: "phoneNumber",
  };

  return (
    <div className="card flex justify-content-center">
      <Dialog
        header={title}
        visible={visible}
        onHide={() => onHide?.()}
        style={{ width, minHeight }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
        className={className}
      >
        <div className="h-[1px] bg-gray-1100 mb-6"></div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full h-full flex flex-col justify-between"
        >
          <div className="flex  flex-col justify-between w-full  gap-8 textInput">
            <Input
              register={register(forgotPasswordField?.userName)}
              label="Name"
              placeholder="Enter Name"
              required
              error={errors[forgotPasswordField?.userName]?.message}
            />
            <Input
              register={register(forgotPasswordField?.email)}
              label="Email Address"
              placeholder="Enter Email Address"
              required
              error={errors[forgotPasswordField?.email]?.message}
            />
            <Input
              register={register(forgotPasswordField?.password)}
              label="password"
              placeholder="password"
              required
              error={errors[forgotPasswordField?.password]?.message}
            />
            <Input
              register={register(forgotPasswordField?.role)}
              label="Select Role"
              placeholder="Enter Select Role"
              required
              error={errors[forgotPasswordField?.role]?.message}
            />
            <Input
              register={register(forgotPasswordField?.phoneNumber)}
              label="Phone Number"
              placeholder="Enter Phone Number"
              required
              error={errors[forgotPasswordField?.phoneNumber]?.message}
            />
          </div>

          <div className="flex flex-col gap-1 buttonText">
            <Button
              type="Add user"
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
        {/* {children} */}
        {footer}
      </Dialog>
    </div>
  );
};
