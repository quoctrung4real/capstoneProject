import React from "react";
import { LoginComponent } from "../LoginComponent";
import styles from "./LoginView.module.scss";
import classNames from "classnames/bind";

const cx= classNames.bind(styles);

const LoginView = () => {
  return (
    <div className={cx("container")}>
      <LoginComponent />
    </div>
  );
};

export default LoginView;
