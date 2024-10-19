import React from "react";
import styles from "./LoginComponent.module.scss";
import classNames from "classnames/bind";
import GoogleIcon from "@mui/icons-material/Google";
import { useGoogleLogin } from "@react-oauth/google";
import { useFormik } from "formik";
import { GetTokenAndRefreshTokenFromCode } from "../../../services/GoogleService/GoogleService";

const cx = classNames.bind(styles);

const LoginComponent = () => {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      if (tokenResponse) {
        GetTokenAndRefreshTokenFromCode(tokenResponse.code).then((res) => {
          let decodedToken = null;
          if (res) {
            
            // if (res?.id_token) {
            //   decodedToken = jwtDecode(res?.id_token);
            // }
            const data = {
              email: decodedToken.email,
              name: decodedToken.name,
              sub: decodedToken.sub,
              access_token: res.access_token,
              refresh_token: res.refresh_token,
            };
            console.log(data);

            //send data to server
          }
        });
      }
    },
    flow: "auth-code",
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      if (values.email === "" || values.password === "") {
        // toast.error("Please enter complete information");
      } else {
        //send data to server
        formik.resetForm();
      }
    },
  });
  return (
    <div className={cx("section")}>
      <div className={cx("tilte")}>
        <h3>Login</h3>
      </div>
      <div className={cx("form-login")}>
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
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className={cx("input-group")}>
              <div className={cx("icon")}>
                <i class="fa-solid fa-key"></i>
              </div>
              <div className={cx("input")}>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
          </div>
          <div className={cx("section-forgot-password")}>
            <div className={cx("forgot-password")}>
              <span>Forgot your password?</span>
            </div>
          </div>
          <div className={cx("divide")}>
            <div></div>
          </div>
          <div className={cx("section-google-login")}>
            <div className={cx("google-login")}>
              <span>or</span>
              <button
                className={cx("btn-google")}
                onClick={() => login()}
                type="button"
              >
                <GoogleIcon />
              </button>
              <span onClick={() => login()}>or Login Google account</span>
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
          <div className={cx("section-button-login")}>
            <div className={cx("button-login")}>
              <button type="button">Login</button>
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
  );
};

export default LoginComponent;
