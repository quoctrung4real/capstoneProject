import React from "react";
import styles from "./nav.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Nav = () => {
  return <div className={cx("nav")}>Nav</div>;
};

export default Nav;
