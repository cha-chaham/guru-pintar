import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useTheme } from "@/utils/contexts/theme";
import { useToken } from "@/utils/contexts/token";
import { toast } from "react-toastify";

export default function Navbar() {
  const { theme, changeTheme } = useTheme();
  const { token, changeToken } = useToken();

  function handleLogout() {
    changeToken();
    toast.success("Successfully logout");
  }

  return (
    <header
      className="w-full sticky top-0 bg-white dark:bg-neutral-800"
      aria-label="navbar"
    >
      <div className="navbar bg-base-100 bg-[#F4ECDC] dark: bg-base-200 px-4 lg:px-[5rem]">
        <div className="navbar-start">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2"
            >
              <li>
                <a>Beranda</a>
              </li>
              <li>
                <a>Tentang Kami</a>
              </li>
              <li>
                <a>Testimoni</a>
              </li>
              <li>
                {" "}
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
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            {theme === "light" ? (
              <img src="/logo/light/Wordmark.png" alt="" className="w-24" />
            ) : (
              <img src="/logo/dark/Wordmark-dark.png" alt="" className="w-24" />
            )}
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3 me-6">
            <li className="font-semibold text-[#2C44BC] dark:text-white">
              <a>Beranda</a>
            </li>
            <li className="font-semibold text-[#2C44BC] dark:text-white">
              <a>Tentang Kami</a>
            </li>
            <li className="font-semibold text-[#2C44BC] dark:text-white">
              <a>Testimoni</a>
            </li>
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
