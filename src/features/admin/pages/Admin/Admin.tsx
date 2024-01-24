import React from "react";
import { UserTable } from "../../components/UserTable/UserTable";
import type { FC } from "react";

export const Admin: FC = () => {
  return (
    <div className="flex w-full bg-white justify-center   rounded-3xl h-[100vw] ">
      <div className="flex w-full bg-white justify-center flex-wrap rounded-3xl">
        <UserTable />
        {/* <span style={{ color: "red" }}>HELLO???</span> */}
      </div>
    </div>
  );
};
