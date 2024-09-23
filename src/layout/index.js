import React from "react";
// import { Header } from "./header";
import { Main } from "./main";
// import { Footer } from "./footer";
import { Nav } from "./nav";

import styles from "./index.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Capstone1Layout = (props) => {
  return (
    <div className={cx("body")}>
      <Nav />
      <Main>{props.children}</Main>
    </div>
  );
};

export default Capstone1Layout;
