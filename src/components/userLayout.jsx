import { ToastContainer } from "react-toastify";

import SidebarDashboard from "./sidebar";
import { useTheme } from "@/utils/contexts/theme";
import "react-toastify/dist/ReactToastify.css";

export default function UserLayout({ children }) {
  const { theme } = useTheme();

  return (
    <div
      className="w-full h-screen bg-white dark:bg-base-100 text-neutral-800 dark:text-white overflow-auto transition-colors ease-in flex flex-col"
      data-theme={theme}
    >
      <div className="flex flex-1">
        <div className="flex bg-gray-100">
          <SidebarDashboard className="" />
        </div>
        <div className="mx-auto grow flex flex-col flex-1">
          {children}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={true}
            closeOnClick
            draggable={false}
            pauseOnHover
            theme={theme == "light" ? "light" : "dark"}
          />
        </div>
      </div>
    </div>
  );
}
