import { CourseList } from "@/api/auth";
import logo from "@/assets/Logo.png";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuthStore } from "@/store/useAuthStore";
import { useQuery } from "@tanstack/react-query";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

type Course = {
  course_id: number;
  name_uz: string;
};

const Header = () => {
  const { t } = useTranslation();
  const { isAuth } = useAuthStore();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { data: courses } = useQuery<Course[]>({
    queryKey: ["courses"],
    queryFn: CourseList,
  });

  const selectedCourse = courses?.find(
    (item) => location.pathname === `/programs/${item.course_id}`,
  );

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/home" className="flex items-center gap-4 cursor-pointer">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              "relative pb-1 transition-all duration-200 " +
              (isActive
                ? "text-[#009688] font-semibold"
                : "text-slate-700 hover:text-[#009688]")
            }
          >
            {({ isActive }) => (
              <>
                {t("Home")}
                <span
                  className={
                    "absolute left-0 bottom-0 h-1 w-full rounded-full bg-[#009688] transition-opacity duration-200 " +
                    (isActive ? "opacity-100" : "opacity-0")
                  }
                />
              </>
            )}
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              "relative pb-1 transition-all duration-200 " +
              (isActive
                ? "text-[#009688] font-semibold"
                : "text-slate-700 hover:text-[#009688]")
            }
          >
            {({ isActive }) => (
              <>
                {t("Services")}
                <span
                  className={
                    "absolute left-0 bottom-0 h-1 w-full rounded-full bg-[#009688] transition-opacity duration-200 " +
                    (isActive ? "opacity-100" : "opacity-0")
                  }
                />
              </>
            )}
          </NavLink>
          <div
            className={`flex items-center ${
              location.pathname.startsWith("/programs")
                ? "border-b-2 border-[#009688] pb-1 font-semibold"
                : "hover:border-b-2 hover:border-slate-300 pb-1"
            }`}
          >
            <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
              <DropdownMenuTrigger asChild>
                <span className="cursor-pointer flex items-center gap-2">
                  {t("Programs")}
                  <ChevronDown
                    size={18}
                    className={dropdownOpen ? "transform rotate-180" : ""}
                  />
                </span>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-65">
                {courses?.map((item) => {
                  const isSelected =
                    selectedCourse?.course_id === item.course_id;
                  return (
                    <DropdownMenuItem asChild key={item.course_id}>
                      <Link
                        to={`/programs/${item.course_id}`}
                        className={`w-full block py-2 px-3 rounded ${
                          isSelected
                            ? "bg-slate-100 text-[#009688] font-semibold"
                            : "text-slate-700 hover:bg-slate-50"
                        }`}
                        onClick={() => setDropdownOpen(false)}
                      >
                        {item.name_uz}
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <a href="">{t("Finance tools")}</a>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              "relative pb-1 transition-all duration-200 " +
              (isActive
                ? "text-[#009688] font-semibold"
                : "text-slate-700 hover:text-[#009688]")
            }
          >
            {({ isActive }) => (
              <>
                {t("Contact")}
                <span
                  className={
                    "absolute left-0 bottom-0 h-1 w-full rounded-full bg-[#009688] transition-opacity duration-200 " +
                    (isActive ? "opacity-100" : "opacity-0")
                  }
                />
              </>
            )}
          </NavLink>
        </div>

        <div className="hidden lg:flex gap-4 items-center">
          <LanguageSwitcher />
          <div className="h-6 w-px bg-slate-200" />
          {isAuth ? (
            <Button asChild className="px-4 py-2 bg-[#009688] text-sm">
              <Link to="/profile">{t("My Profile")}</Link>
            </Button>
          ) : (
            <Button asChild className="px-4 py-2 bg-[#009688] text-sm">
              <Link to="/login">{t("Sign In")}</Link>
            </Button>
          )}
        </div>

        {/* mobile controls */}
        <div className="lg:hidden flex items-center">
          <LanguageSwitcher />
          <button
            aria-label="Menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="ml-3 p-2 rounded-md text-slate-700 hover:bg-slate-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* mobile menu panel */}
        {mobileOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              <NavLink
                to="/home"
                onClick={() => setMobileOpen(false)}
                className="text-slate-700 py-2"
              >
                {t("Home")}
              </NavLink>
              <NavLink
                to="/services"
                onClick={() => setMobileOpen(false)}
                className="text-slate-700 py-2"
              >
                {t("Services")}
              </NavLink>
              <div>
                <div className="font-medium pb-2">{t("Programs")}</div>
                <div className="flex flex-col">
                  {courses?.map((item) => {
                    const isSelected =
                      selectedCourse?.course_id === item.course_id;
                    return (
                      <Link
                        key={item.course_id}
                        to={`/programs/${item.course_id}`}
                        onClick={() => setMobileOpen(false)}
                        className={`py-1 block px-2 rounded ${
                          isSelected
                            ? "bg-slate-100 text-[#009688] font-semibold"
                            : "text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {item.name_uz}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <a href="" className="text-slate-700 py-2">
                {t("Finance tools")}
              </a>
              <NavLink
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="text-slate-700 py-2"
              >
                {t("Contact")}
              </NavLink>
              <div className="pt-2">
                {isAuth ? (
                  <Button
                    asChild
                    className="w-full px-4 py-2 bg-[#009688] text-sm"
                  >
                    <Link to="/profile">{t("My Profile")}</Link>
                  </Button>
                ) : (
                  <Button
                    asChild
                    className="w-full px-4 py-2 bg-[#009688] text-sm"
                  >
                    <Link to="/login">{t("Sign In")}</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
