import type { FC } from "react";
import { Mfa } from "../../components/Mfa";
import { getLocalStorage } from "../../../../utils/local-storage";
import { userEmail } from "../../utils/constants";
import { AuthRoutesNames } from "../../routes/AuthRouter";
import React from "react";

export const SecondFAAdmin: FC = () => {
  const localEmail = getLocalStorage(userEmail);
  const emailParts = localEmail.split("@");
  const hiddenEmail = `${emailParts[0]?.replace(
    emailParts[0]?.slice(0, Math.max(0, emailParts[0].length - 4)),
    "*******"
  )}@${emailParts[1]}`;
  const title = "Welcome!";
  const buttonText = "Login";
  const subtitle = "Please enter your login credentials to proceed";
  const servicePath = "login-code";

  return (
    <div className="flex flex-col items-center  gap-3 h-full w-full">
      <Mfa
        title={title}
        subTitle={subtitle}
        buttonText={buttonText}
        // receptorCode={localEmail}
        labelData={hiddenEmail}
        emailAllow={false}
        navigateTo={"/manage-users/admins"}
        backRoute={AuthRoutesNames.login}
        servicePath={servicePath}
      />
    </div>
  );
};
