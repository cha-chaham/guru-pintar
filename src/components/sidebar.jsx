import { React, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, redirect } from "react-router-dom";
import {
  RiDashboardFill,
  RiFileAddFill,
  RiBubbleChartFill,
  RiLogoutBoxRLine,
  RiMenu2Fill,
} from "react-icons/ri";

import { useTheme } from "@/utils/contexts/theme";
import { useToken } from "@/utils/contexts/token";
import { toast } from "react-toastify";

export default function SidebarDashboard({ children }) {
  const { theme, changeTheme } = useTheme();
  const { token, changeToken } = useToken();
  const [collapsed, setCollapsed] = useState(false);
  const [broken, setBroken] = useState(
    window.matchMedia("(max-width: 800px)").matches
  );

  function handleCollapse() {
    setCollapsed(!collapsed);
    console.log(collapsed);
  }

  function handleLogout() {
    toast.success(
      "Proses Keluar Berhasil, Anda akan otomatis dialihkan ke halaman utama",
      {
        autoClose: 2000,
        hideProgressBar: false,
      }
    );
    setTimeout(() => {
      changeToken();
      window.location.href = "/";
    }, 3000);
  }

  return (
    <div className="bg-base-100">
      {broken && (
        <button onClick={handleCollapse} className="text-[#2C44BC] w-12 p-2">
          <RiMenu2Fill size="2rem" />
        </button>
      )}
      <Sidebar
        className="overflow-y-hidden h-full fixed left-0"
        backgroundColor={theme == "light" ? "#F4ECDC" : "#1d232a"}
        toggled={collapsed}
        breakPoint="sm"
        onBreakPoint={setBroken}
        collapsedWidth="25px"
        onBackdropClick={() => handleCollapse()}
      >
        <div className="justify-center flex py-8 px-4 items-center ">
          {theme == "light" ? (
            <img
              src="/logo/light/HorizontalLayout.png"
              alt=""
              className="w-42"
            />
          ) : (
            <img
              src="/logo/dark/HorizontalLayout-dark.png"
              alt=""
              className="w-42"
            />
          )}
        </div>
        <div className="divider m-0"></div>

        <Menu className="hover:text-[#2C44BC] dark:hover:text-[#2C44BC] text-[#2C44BC] dark:text-white">
          <MenuItem
            onClick={() => changeTheme()}
            icon={
              theme === "light" ? (
                <FaMoon aria-label="btn-theme-dark" size={20} />
              ) : (
                <FaSun aria-label="btn-theme-light" size={20} />
              )
            }
          >
            Ganti Warna Tema
          </MenuItem>
        </Menu>
        <div className="divider m-0"></div>
        <Menu className="hover:text-[#2C44BC] dark:hover:text-[#2C44BC] text-[#2C44BC] dark:text-white">
          <Link to="/dashboard">
            <MenuItem icon={<RiDashboardFill />}>Dashboard</MenuItem>
          </Link>
        </Menu>
        <Menu className="hover:text-[#2C44BC] dark:hover:text-[#2C44BC] text-[#2C44BC] dark:text-white">
          <Link to="/register-kelas">
            <MenuItem icon={<RiFileAddFill />}>Tambah Kelas</MenuItem>
          </Link>
        </Menu>
        <Menu className="hover:text-[#2C44BC] dark:hover:text-[#2C44BC] text-[#2C44BC] dark:text-white">
          <Link to="/kreatif-belajar">
            <MenuItem icon={<RiBubbleChartFill />}>Kreatif Belajar</MenuItem>
          </Link>
        </Menu>
        <div className="divider m-0"></div>

        <Menu className="hover:text-[#2C44BC] dark:hover:text-[#2C44BC] text-[#2C44BC] dark:text-white bottom-0">
          <MenuItem icon={<RiLogoutBoxRLine />} onClick={handleLogout}>
            Keluar Akun
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}
