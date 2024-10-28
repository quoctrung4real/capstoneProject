import Capstone1Layout from "../layout";
import { Outlet, useRoutes } from "react-router-dom";
import { Suspense } from "react";
import LoginPage from "../page/Login";
import ForgotPasswordPage from "../page/ForgotPassword";
import AccountSettingPage from "../page/AccountSetting";
import Practice from "../page/Practice";

const Router = () => {
  
  const routes = useRoutes([
    {
      element: (
        <Capstone1Layout>
          <Suspense fallback={<></>}>
            <Outlet />
          </Suspense>
        </Capstone1Layout>
      ),
      children: [
        { path: "/home", element: <div>home page</div> },
        { path: "/login", element: <LoginPage /> },
        { path: "/forgot-password", element: <ForgotPasswordPage /> },
        { path: "/account-setting", element: <AccountSettingPage /> },
        { path: "/practices", element: <Practice /> },
        { element: <></>, index: true },
      ],
    },
    {
      path: "*",
      element: <div>404</div>,
    },
  ]);
  return routes;
};

export default Router;
