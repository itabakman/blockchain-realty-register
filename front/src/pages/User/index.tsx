import React from "react";
import { useAppSelector } from "../../store";

export const User = () => {
  const { user } = useAppSelector((state) => state);
  console.log("user,", user.name);

  return <div>UserPage</div>;
};
