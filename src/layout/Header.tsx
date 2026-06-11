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

type Course = {
  course_id: number;
  name_uz: string;
};

const Header = () => {
  const { t } = useTranslation();
  const { isAuth } = useAuthStore();
  const location = useLocation();

  const { data: courses } = useQuery<Course[]>({
    queryKey: ["courses"],
    queryFn: CourseList,
  });

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md ">
      <div className="flex items-center justify-between container mx-auto px-4 pt-5 pb-5">
        <div>
          <img src={logo} alt="" />
        </div>

        <div className="flex gap-8">
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <span>{t("Programs")}</span>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-65">
                {courses?.map((item) => (
                  <DropdownMenuItem asChild key={item.course_id}>
                    <Link to={`/programs/${item.course_id}`}>
                      {item.name_uz}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <ChevronDown size={22} />
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

        <div className="flex gap-4 items-center">
          <LanguageSwitcher />
          <div className="border"></div>
          {/* <Button className="px-6 py-5 bg-[#009688] text-lg cursor-pointer">
            sign in
          </Button> */}
          {/* {JSON.stringify(user)} */}
          {isAuth ? (
            <Button
              asChild
              className="px-6 py-5 bg-[#009688] text-lg cursor-pointer"
            >
              <Link to="/profile">My Profile</Link>
            </Button>
          ) : (
            <Button
              asChild
              className="px-6 py-5 bg-[#009688] text-lg cursor-pointer"
            >
              <Link to="/login">Sign In</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
