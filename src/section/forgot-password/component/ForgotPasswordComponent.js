import React from 'react';
import styles from "./ForgotPasswordComponent.module.scss";
import classNames from "classnames/bind";
import GoogleIcon from "@mui/icons-material/Google";

const cx= classNames.bind(styles);
const ForgotPasswordComponent = () => {
  return (
    <div className={cx("section")}>
      <div className={cx("tilte")}>
        <h3>Forgot Password</h3>
      </div>
      <div className={cx("form-forgot-password")}>
        <form>
          <div className={cx("section-input")}>
            <div className={cx("input-group")}>
              <div className={cx("icon")}>
                <i class="fa-solid fa-user"></i>
              </div>
              <div className={cx("input")}>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="User name / or Email"
                />
              </div>
            </div>
          </div>
          <div className={cx("divide")}>
            <div></div>
          </div>
          <div className={cx("section-google-login")}>
            <div className={cx("google-login")}>
              <span>or</span>
              <button className={cx("btn-google")} type="button">
                <GoogleIcon />
              </button>
              <span>or Login Google account</span>
            </div>
          </div>
          <div className={cx("section-term-conditions")}>
            <div className={cx("term-conditions")}>
              <div className={cx("select-box")}>
                <label htmlFor="terms">
                  <input type="checkbox" id="terms" name="terms" />I have read
                  and accept the terms and conditions.
                </label>
              </div>
              <div className={cx("select-box")}>
                <label htmlFor="email">
                  <input type="checkbox" id="email" name="email" />
                  Send me an email in the future.
                </label>
              </div>
            </div>
          </div>
          <div className={cx("section-button-send-email")}>
            <div className={cx("button-send-email")}>
              <button type="button">Send me email</button>
            </div>
          </div>
          <div className={cx("section-other")}>
            <div className={cx("other")}>
              <span>Or</span>
              <a href="/login" className={cx("back")}>
                Go back
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPasswordComponent
