import React, { useState } from "react";
import { useStyles } from "./styles";
import { Button } from "@mantine/core";
import { Outlet, useNavigate } from "react-router-dom";

export const Authorization = () => {
  const { classes, theme } = useStyles();
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/auth/login");
  };

  const onRegister = () => {
    navigate("/auth/register");
  };

  return (
    <div className={classes.root}>
      <div>Authorization page</div>
      <div className={classes.btns}>
        <Button
          onClick={onRegister}
          className={classes.btn}
          color={theme.primaryColor}
        >
          Зарегистрироваться
        </Button>
        <Button onClick={onLogin} className={classes.btn}>
          Войти
        </Button>
      </div>
    </div>
  );
};
