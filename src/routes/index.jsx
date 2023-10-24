import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Home from "@/pages";
import AuthLogin from "@/pages/auth/login";
import AuthRegister from "@/pages/auth/register";
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
import EditMeeting from "@/pages/kelas/editMeeting";

export default function Router() {
  const { token } = useToken();

  useEffect(() => {
    setAxiosConfig("", import.meta.env.VITE_BASE_URL);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      title: "Beranda",
    },
    {
      path: "/login",
      element: token !== "" ? <Navigate to="/" /> : <AuthLogin />,
      title: "Login",
    },
    {
      path: "/register",
      element: token !== "" ? <Navigate to="/" /> : <AuthRegister />,
      title: "Registrasi Akun",
    },
    {
      path: "/dashboard",
      element: token === "" ? <Navigate to="/" /> : <Dashboard />,
      title: "Dashboard",
    },
    {
      path: "/register-kelas",
      element: token === "" ? <Navigate to="/" /> : <RegisterClass />,
      title: "Registrasi Kelas",
    },
    {
      path: "/register-meeting/:idKelas",
      element: token === "" ? <Navigate to="/" /> : <RegisterMeeting />,
      title: "Registrasi Pertemuan",
    },
    {
      path: "/edit-meeting/:idKelas/:idMeeting",
      element: token === "" ? <Navigate to="/" /> : <EditMeeting />,
      title: "Edit Pertemuan",
    },
    {
      path: "/edit-kelas/:id",
      element: token === "" ? <Navigate to="/" /> : <EditClass />,
      title: "Edit Kelas",
    },
    {
      path: "/kelas/students/:id",
      element: token === "" ? <Navigate to="/" /> : <Students />,
      title: "Siswa",
    },
    {
      path: "/kelas/:id",
      element: token === "" ? <Navigate to="/" /> : <DetailClass />,
      title: "Kelas",
    },
    {
      path: "/kelas/:idKelas/:idMeeting",
      element: token === "" ? <Navigate to="/" /> : <DetailMeeting />,
      title: "Pertemuan",
    },
    {
      path: "*",
      element: <div>404 page not found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
