import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Home from "@/pages";
import AuthLogin from "@/pages/auth/login";
import AuthRegister from "@/pages/auth/register";
import ProductsPage from "@/pages/products";
import ProductsDetail from "@/pages/products/detail";
import { useEffect } from "react";
import { setAxiosConfig } from "@/utils/apis/axiosWithConfig";
import { useToken } from "@/utils/contexts/token";

import Dashboard from "@/pages/dashboard";
import DetailClass from "@/pages/kelas/detailClass";
import RegisterClass from "@/pages/kelas/registerClass";
import Students from "@/pages/kelas/students";
import EditClass from "@/pages/kelas/editClass";
import RegisterMeeting from "@/pages/kelas/registerMeeting";
import DetailMeeting from "@/pages/kelas/detailMeeting";

export default function Router() {
  const { token } = useToken();

  useEffect(() => {
    setAxiosConfig("", import.meta.env.VITE_BASE_URL);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products",
      element: token === "" ? <Navigate to="/" /> : <ProductsPage />,
    },
    {
      path: "/products/:id",
      element: token === "" ? <Navigate to="/" /> : <ProductsDetail />,
    },
    {
      path: "/login",
      element: token !== "" ? <Navigate to="/" /> : <AuthLogin />,
    },
    {
      path: "/register",
      element: token !== "" ? <Navigate to="/" /> : <AuthRegister />,
    },
    {
      path: "/dashboard",
      element: token === "" ? <Navigate to="/" /> : <Dashboard />,
    },
    {
      path: "/register-kelas",
      element: token === "" ? <Navigate to="/" /> : <RegisterClass />,
    },
    {
      path: "/register-meeting/:idKelas",
      element: token === "" ? <Navigate to="/" /> : <RegisterMeeting />,
    },
    {
      path: "/edit-meeting/:idKelas/:idMeeting",
      element: token === "" ? <Navigate to="/" /> : <RegisterMeeting />,
    },
    {
      path: "/edit-kelas/:id",
      element: token === "" ? <Navigate to="/" /> : <EditClass />,
    },
    {
      path: "/kelas/students/:id",
      element: token === "" ? <Navigate to="/" /> : <Students />,
    },
    {
      path: "/kelas/:id",
      element: token === "" ? <Navigate to="/" /> : <DetailClass />,
    },
    {
      path: "/kelas/:idKelas/:idMeeting",
      element: token === "" ? <Navigate to="/" /> : <DetailMeeting />,
    },
    {
      path: "*",
      element: <div>404 page not found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
