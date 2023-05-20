import React, { ReactElement, useEffect } from "react";
import { useAppSelector } from "../../store";
import { useNavigate } from "react-router-dom";

interface Props {
  children: ReactElement<any, any>;
}

export const RequireAuth = ({ children }: Props): JSX.Element => {
  const {
    user: { user },
  } = useAppSelector((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, []);

  return children;
};
