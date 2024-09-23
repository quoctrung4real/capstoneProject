import Capstone1Layout from "../layout";
import { Outlet, useRoutes } from "react-router-dom";
import { Suspense } from "react";

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
        { element: <div>hello</div>, index: true },
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
