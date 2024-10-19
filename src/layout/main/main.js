import React from "react";
import styles from "./main.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Main = (props) => {
  return (
    <div className={cx("main-container")}>
      <div className={cx("wrapper")}>{props.children}</div>
    </div>
  );
};

export default Main;
