import React from "react";
import styles from "./AccountSettingComponent.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const AccountSettingComponent = () => {
  return (
    <div className={cx("section")}>
      <div className={cx("header")}>
        <h1>Welcome,Carl Johnson</h1>
        <div className={cx("right")}>
          <div className={cx("notify")}><i class="fa-solid fa-bell"></i></div>
          <div className={cx("search")}><i class="fa-solid fa-magnifying-glass"></i></div>
          <div className={cx("img")}>
            <img src="">
            </img>
          </div>
        </div>
      </div>
      <div className={cx("container")}>

      </div>

    </div>

    
    

    
    

  )

};

export default AccountSettingComponent;
