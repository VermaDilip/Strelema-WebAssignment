import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import {
  LayoutDashboard,
  Users,
  Building2,
  Calendar,
  FileText,
  CalendarDays,
  GraduationCap,
  Settings,
  Sun,
  Moon,
} from "lucide-react";
import { useState } from "react";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
    active: false,
  },
  {
    name: "All Employees",
    icon: Users,
    path: "/employees",
    active: true,
  },
  {
    name: "All Departments",
    icon: Building2,
    path: "/departments",
    active: false,
  },
  {
    name: "Attendance",
    icon: Calendar,
    path: "/attendance",
    active: false,
  },
  {
    name: "Leaves",
    icon: FileText,
    path: "/leaves",
    active: false,
  },
  {
    name: "Holidays",
    icon: CalendarDays,
    path: "/holidays",
    active: false,
  },
  {
    name: "Training",
    icon: GraduationCap,
    path: "/training",
    active: false,
  },
  {
    name: "Setting",
    icon: Settings,
    path: "/settings",
    active: false,
  },
];

export default function Sidebar() {
  const location = useLocation();
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <aside className="w-[280px] h-screen bg-gray-500/5 rounded-[20px] p-[30px] flex flex-col fixed left-0 top-0">
      <div className="mb-[41px]">
        <div className="w-[123px] h-[50px] flex items-center">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/b1173123d5c0ca65b2803439a9dc1b7075ce28f8?width=192"
            alt="Logo"
            className="w-24 h-[70px] object-contain"
          />
        </div>
      </div>

      <nav className="flex-1 space-y-2.5">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-5 h-[50px] px-[19px] rounded-r-[10px] transition-colors relative group",
                isActive
                  ? "bg-primary-500/5"
                  : "hover:bg-gray-500/5"
              )}
            >
              {isActive && (
                <div className="absolute left-0 top-0 w-[3px] h-full bg-primary-500 rounded-[10px]" />
              )}
              <Icon
                className={cn(
                  "w-6 h-6",
                  isActive ? "text-primary-500" : "text-dark-500"
                )}
              />
              <span
                className={cn(
                  "font-outfit text-base leading-6",
                  isActive
                    ? "text-primary-500 font-semibold"
                    : "text-dark-500 font-normal"
                )}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto">
        <div className="w-[220px] h-[50px] bg-gray-500/5 rounded-[10px] flex items-center p-0 relative">
          <button
            onClick={() => theme === "dark" && toggleTheme()}
            className={cn(
              "w-[110px] h-[50px] rounded-[10px] flex items-center justify-center gap-2.5 transition-all",
              theme === "light" && "bg-gradient-primary"
            )}
          >
            <Sun className="w-6 h-6 text-white" />
            <span className="text-white font-outfit text-base">Light</span>
          </button>
          <button
            onClick={() => theme === "light" && toggleTheme()}
            className={cn(
              "w-[110px] h-[50px] rounded-[10px] flex items-center justify-center gap-2.5 transition-all",
              theme === "dark" && "bg-gradient-primary"
            )}
          >
            <Moon className="w-6 h-6 text-dark-500" />
            <span className="text-dark-500 font-outfit text-base">Dark</span>
          </button>
        </div>
      </div>
    </aside>
  );
}