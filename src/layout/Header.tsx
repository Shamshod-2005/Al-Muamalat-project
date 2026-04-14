import logo from "@/assets/Logo.png";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md ">
      <div className="flex items-center justify-between container mx-auto px-4 pt-5 pb-5">
        <div>
          <img src={logo} alt="" />
        </div>

        <div className="flex gap-8">
          <a href="">{t("Home")}</a>
          <a href="" className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <span>{t("Programs")}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-65">
                <DropdownMenuItem className="">
                  <span>{t("International educational programs")}</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>{t("Specialized courses")}</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>{t("Islamic Finance Literacy Course")}</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>{t(" Sertification program")}</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <ChevronDown size={22} />
          </a>
          <a href="">{t("Finance tools")}</a>
          <a href="">{t("Contact")}</a>
        </div>

        <div className="flex gap-4 items-center">
          <LanguageSwitcher />
          <div className="border"></div>
          <Button className="px-6 py-5 bg-[#009688] text-lg cursor-pointer">
            sign in
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
