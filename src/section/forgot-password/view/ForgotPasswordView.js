import React from 'react'
import {ForgotPasswordComponent} from "../component";
import styles from "./ForgotPasswordView.module.scss";
import classNames from "classnames/bind";

const cx= classNames.bind(styles);
const ForgotPasswordView = () => {
  return (
    <div className={cx("container")}>
      <ForgotPasswordComponent />
    </div>
  )
}

export default ForgotPasswordView
