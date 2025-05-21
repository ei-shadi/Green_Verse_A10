import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import ExploreGardeners from "../Pages/ExploreGardeners";
import BrowseTips from "../Pages/BrowseTips";
import ShareGardenTip from "../Pages/ShareGardenTip";
import MyTips from "../Pages/MyTips";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layout/AuthLayout";
import PrivateRoute from "../Provider/PrivateRoute";




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "explore-gardeners",
        element: <ExploreGardeners />,
      },
      {
        path: "browse-tips",
        element: <BrowseTips />,
      },
      {
        path: "share-garden-tips",
        element: <PrivateRoute>
          <ShareGardenTip />
        </PrivateRoute>,
      },
      {
        path: "my-tips",
        element: <PrivateRoute>
          <MyTips />
        </PrivateRoute>,
      }
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  }
]);



export default router;