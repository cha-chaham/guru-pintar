import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useTheme } from "@/utils/contexts/theme";
import { useToken } from "@/utils/contexts/token";
import { toast } from "react-toastify";
import { Button } from "./button";
import { RiLogoutBoxLine, RiDashboardFill } from "react-icons/ri";

export default function Navbar() {
  const { theme, changeTheme } = useTheme();
  const { token, changeToken } = useToken();

  function handleLogout() {
    changeToken();
    toast.success("Proses Keluar Berhasil", {
      autoClose: 2000,
      hideProgressBar: false,
    });
  }

  return (
    <header
      className="w-full sticky top-0 bg-white dark:bg-neutral-800"
      aria-label="navbar"
    >
      <div className="navbar bg-[#F4ECDC] dark:bg-base-200 px-4 lg:px-[1.5rem] justify-between">
        <div className="navbar-start w-1/4">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#F4ECDC] dark:bg-base-100 rounded-box w-52 gap-2"
            >
              <li>
                <a href="/">Beranda</a>
              </li>
              <li>
                <a href="#aboutUs">Tentang Kami</a>
              </li>
              <li>
                <a href="#testimoni">Testimoni</a>
              </li>
              <li>
                {" "}
                <div onClick={() => changeTheme()}>
                  {theme === "light" ? (
                    <FaMoon
                      className="text-[#2C44BC] dark:text-white"
                      aria-label="btn-theme-dark"
                      size={25}
                    />
                  ) : (
                    <FaSun
                      className="text-[#2C44BC] dark:text-white"
                      aria-label="btn-theme-light"
                      size={25}
                    />
                  )}
                  Ganti Tema
                </div>
              </li>
              {token !== "" ? (
                <div className="">
                  <div className="divider m-0 p-0">Akun</div>
                  <li className="my-2">
                    <Link to="/dashboard">
                      <RiDashboardFill
                        size={25}
                        className="text-[#2C44BC] dark:text-white"
                      />
                      Dashboard
                    </Link>
                  </li>
                  <li className="my-2">
                    <p>
                      <RiLogoutBoxLine
                        size={25}
                        className="text-[#2C44BC] dark:text-white"
                      />
                      Logout
                    </p>
                  </li>
                </div>
              ) : (
                ""
              )}
              {token !== "" ? (
                ""
              ) : (
                <Link to="/login">
                  <Button
                    className="bg-[#2C44BC] text-[#ECDC44] rounded-full font-bold hover:bg-[#375bd9] transition-colors ease-in h-full w-full px-5 place-content-center lg:px-8"
                    label="Login"
                  />
                </Link>
              )}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            {theme === "light" ? (
              <img
                src="/logo/light/HorizontalLayout.png"
                alt=""
                className="w-32"
              />
            ) : (
              <img
                src="/logo/dark/HorizontalLayout-dark.png"
                alt=""
                className="w-32"
              />
            )}
          </a>
        </div>
        <div className="navbar-end hidden lg:flex w-full">
          <ul className="menu menu-horizontal px-0 gap-0 items-center me-7">
            <li className="font-semibold text-[#2C44BC] dark:text-white">
              <a href="/">Beranda</a>
            </li>
            <li className="font-semibold text-[#2C44BC] dark:text-white">
              <a href="#aboutUs">Tentang Kami</a>
            </li>
            <li className="font-semibold text-[#2C44BC] dark:text-white">
              <a href="#testimoni">Testimoni</a>
            </li>
            {token !== "" ? (
              <div className="flex flex-row">
                {" "}
                <li className="my-2">
                  <Link to="/dashboard">
                    <RiDashboardFill
                      size={25}
                      className="text-[#2C44BC] dark:text-white"
                    />
                    Dashboard
                  </Link>
                </li>
                <li className="my-2" onClick={handleLogout}>
                  <p>
                    <RiLogoutBoxLine
                      size={25}
                      className="text-[#2C44BC] dark:text-white"
                    />
                    Logout
                  </p>
                </li>
              </div>
            ) : (
              <Link to="/login">
                <Button
                  className="bg-[#2C44BC] text-[#ECDC44] rounded-full font-bold hover:bg-[#375bd9] transition-colors ease-in h-full w-full px-5 place-content-center lg:px-8"
                  label="Login"
                />
              </Link>
            )}
          </ul>
          <div>
            {theme === "light" ? (
              <FaMoon
                className="text-[#2C44BC] dark:text-white"
                aria-label="btn-theme-dark"
                size={25}
                onClick={() => changeTheme()}
              />
            ) : (
              <FaSun
                className="text-[#2C44BC] dark:text-white"
                aria-label="btn-theme-light"
                size={25}
                onClick={() => changeTheme()}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
