import React from "react";
import { Outlet } from "react-router-dom";

interface Props {}

export const Realty = ({}: Props) => {
  return (
    <div>
      some realty here
      <Outlet />
    </div>
  );
};
