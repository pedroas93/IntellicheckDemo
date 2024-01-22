import type { FC } from "react";
import { Mfa } from "../../../../features/auth/components/Mfa";
import { getLocalStorage } from "../../../../utils/local-storage";
import { userEmail } from "../../utils/constants";
import { AuthRoutesNames } from "../../routes/AuthRouter";
import React from "react";

export const ResetPasswordMfa: FC = () => {
  const localEmail = getLocalStorage(userEmail);
  const emailParts = localEmail.split("@");
  const hiddenEmail = `${emailParts[0]?.replace(
    emailParts[0]?.slice(0, Math.max(0, emailParts[0].length - 4)),
    "*******"
  )}@${emailParts[1]}`;
  const title = "Forgot Password!";
  const buttonText = "New password";
  const subtitle = "An email has been sent to your email containing a 6 digit code";
  const servicePath = "verify-code";

    return (
      <div className="flex flex-col items-center  gap-3 h-full w-full">
        <Mfa
          title= {title}
		      subTitle= {subtitle}
          buttonText= {buttonText}
          // receptorCode={localEmail}
          labelData={hiddenEmail}
          emailAllow={false}
          navigateTo={AuthRoutesNames.recoveryPassword}
          backRoute={AuthRoutesNames.login}
          servicePath={servicePath}
        />
      </div>
    );
};
