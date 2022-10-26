import React from "react";
import { Login } from "../login/Login";
import { Register } from "../register/Register";

export const HomeScreen = () => {
  return (
    <div>
      <Login />
      <Register />
    </div>
  );
};
