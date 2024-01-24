import type { FC } from "react";
import React from "react";
import { Button } from "../Button";

interface TableHeaderProps {
  nameView?: string;
  add?: boolean;
  visible: boolean;
  setVisible: (value: any) => void;
}

export const TableHeader: FC<TableHeaderProps> = ({
  nameView,
  add,
  visible,
  setVisible,
}) => {
  const handleModal = (value: string): void => {
    setVisible(!visible);
  };

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <h3>{nameView}</h3>
      <>
        {add && <Button buttonText={"Add user"} onClick={handleModal} />}
        <div>
          <span>Filter</span>
        </div>
      </>
    </div>
  );
};
