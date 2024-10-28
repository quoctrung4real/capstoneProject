import React from "react";
import { AccountSettingComponent } from "../component";
import styles from "./AccountSettingView.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const AccountSettingView = () => {
  return (
    <div className={cx("container")}>
      <AccountSettingComponent />
    </div>
  );
};

export default AccountSettingView;
