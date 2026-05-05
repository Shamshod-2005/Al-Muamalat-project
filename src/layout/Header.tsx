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
import { Link } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation();
  const { isAuth, user, logout } = useAuthStore();

  const { data, isLoading, error } = useQuery({
    queryKey: ["courses"],
    queryFn: CourseList,
  });
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  console.log(data);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md ">
      <div className="flex items-center justify-between container mx-auto px-4 pt-5 pb-5">
        <div>
          <img src={logo} alt="" />
        </div>

        <div className="flex gap-8">
          <a href="/home">{t("Home")}</a>
          <a href="" className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <span>{t("Programs")}</span>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-65">
                {data?.map((item: any) => (
                  <DropdownMenuItem key={item.course_id}>
                    <Link to={`/programs/${item.course_id}`}>
                      {item.name_uz}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <ChevronDown size={22} />
          </a>
          <a href="">{t("Finance tools")}</a>
          <a href="/profile">{t("Contact")}</a>
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
              onClick={logout}
              className="px-6 py-5 bg-[#009688] text-lg cursor-pointer"
            >
              logout
            </Button>
          ) : (
            <Button className="px-6 py-5 bg-[#009688] text-lg cursor-pointer">
              sign in
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
