import React from "react";
import { PasswordInput, TextInput } from "@mantine/core";
import { useStyles } from "./styles";

interface Props {}

export const Login = ({}: Props) => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <TextInput />
      <PasswordInput />
    </div>
  );
};
