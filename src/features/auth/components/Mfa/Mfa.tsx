import { type FC, useState } from "react";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "@tanstack/router";
import { Input } from "../../../../components/forms/Input";
import { AuthenticateCode } from "../../../../components/ui/AuthenticateCode";
import { Button } from "../../../../components/ui/Button";
import { sendToLocalStorage } from "../../../../utils/local-storage";
import { LoginTitle } from "../LoginTitle";
import { ToastMfa } from "../ToastMfa";
import { mfaCode } from "../../utils/constants";
import React from "react";
import axios from "axios";
import "./Mfa.css";

interface MfaProps {
  title?: string;
  subTitle?: string;
  navigateTo?: string | null;
  buttonText?: string;
  labelData?: string;
  backRoute?: string;
  showBackButton?: boolean;
  emailAllow?: boolean;
  servicePath?: string;
}

export const Mfa: FC<MfaProps> = ({
  title,
  subTitle,
  buttonText,
  navigateTo,
  backRoute,
  labelData,
  showBackButton = true,
  emailAllow = false,
  servicePath,
}) => {
  const navigate = useNavigate();
  const [resentMessage, sendResentMessage] = useState<boolean>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [codeMfa, sendCodeMfa] = useState<string>("");

  const handleAuthCodeChange = (result: string): void => {
    if (result.length === 6) {
      sendCodeMfa(result);
    } else {
      sendCodeMfa("");
    }
  };

  const handleSendCode = async (): Promise<void> => {
    try {
      sendResentMessage(true);
    } catch (error) {
      console.log(error);
      setErrorMessage("Something goes wrong");
    }
  };

  const handleSendMfa = async (): Promise<void> => {
    try {
      sendToLocalStorage(mfaCode, codeMfa);

      console.log("what is labelData --> ", codeMfa);

      let codeSend = {};
      if (servicePath === "login-code") {
        codeSend = {
          loginCode: codeMfa,
        };
      } else {
        codeSend = {
          recoveryCode: codeMfa,
        };
      }

      const apiUrl = `https://intellicheckbackend-production.up.railway.app/${servicePath} `;
      const response = await axios.post(apiUrl, codeSend);
      console.log("Response Data:", response.data);

      if (
        servicePath === "login-code" &&
        response.data.message ===
          "Verification code sent to your email or phone. Please verify."
      ) {
        void navigate({ to: `/${navigateTo}` });
      }
      if (servicePath === "registerCode" && response.data.success) {
        void navigate({ to: `/${navigateTo}` });
      }
      if (servicePath === "verify-code" && response.data.token) {
        sendToLocalStorage("codeResetPassword", response.data.token);
        void navigate({ to: `/${navigateTo}` });
      }
    } catch {
      setErrorMessage("The code is not right");
    }
  };

  const closeResentMessage = (): void => {
    sendResentMessage(!resentMessage);
  };

  const backTo = (): void => {
    void navigate({ to: `/${backRoute}` });
  };

  const goBAck = (): void => {
    void navigate({ to: `/login` });
  };

  return (
    <div className="flex flex-col items-center  gap-3 h-full">
      <LoginTitle title={title} subTitle={subTitle}>
        <hr className=" w-full" />
        <div className="flex  flex-col justify-between h-full  gap-5">
          <div className="flex flex-col gap-5">
            <div className="flex justify-between gap-2">
              {emailAllow && (
                <div style={{ width: "52%" }}>
                  <Input
                    disabled
                    defaultValue={labelData}
                    label="code"
                    required
                  />
                </div>
              )}
              {/* <div className="flex self-end">
                <Button
                  buttonText="Resend Code"
                  onClick={handleSendCode}
                  className={`bg-primary-500 h-10`}
                />
              </div> */}
            </div>

            <div>
              {resentMessage && <ToastMfa onClose={closeResentMessage} />}
            </div>
            <div>
              <AuthenticateCode
                handleOnChange={handleAuthCodeChange}
                label="Confirmation Code"
                required
              />
            </div>
            {errorMessage && (
              <Alert className="alert" variant="danger">
                {errorMessage}
              </Alert>
            )}
          </div>
          <div className=" texts-send-code ">
            {showBackButton && (
              <>
                <div className="text-didnt-receive ">
                  <span>Didn’t Receive a Code?</span>
                </div>
                <div onClick={handleSendCode} className="bg-secundary-200">
                  Send Code
                </div>
              </>
            )}
          </div>

          <div className="flex flex-col gap-1 buttonText">
            <Button
              onClick={handleSendMfa}
              buttonText={buttonText}
              className={` h-12 ${codeMfa ? "bg-primary-500" : "bg-gray-300"}`}
              disabled={!codeMfa}
            />
          </div>
          <div className="flex flex-col gap-1">
            {showBackButton && (
              <div onClick={backTo} className="bg-secundary-100">
                Back
              </div>
            )}
          </div>
        </div>
      </LoginTitle>
    </div>
  );
};
