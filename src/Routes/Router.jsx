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
import ErrorPage from "../Pages/ErrorPage";
import Loader from "../Utilities/Loader";
import TipsDetailPage from "../Components/TipsDetailPage";
import MyTipsUpdate from "../Components/MyTipsUpdate";




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <Loader />,
    children: [
      {
        index: true,
        hydrateFallbackElement: <Loader />,
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
      },
      {
        path: "tips-details/:id",
        loader: ({ params }) => fetch(`https://green-verse-server.vercel.app/gardeners-tips/${params.id}`),
        element: <PrivateRoute>
          <TipsDetailPage />
        </PrivateRoute>,
      },
      {
        path: "update-tips/:id",
        loader: ({ params }) => fetch(`https://green-verse-server.vercel.app/gardeners-tips/${params.id}`),
        element: <PrivateRoute>
          <MyTipsUpdate />
        </PrivateRoute>,
      }
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ]
  },
  {
    path: "*",
    element: <ErrorPage />
  }
]);



export default router;