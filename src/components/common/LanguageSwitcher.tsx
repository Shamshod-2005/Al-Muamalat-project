import uk_flag from "@/assets/uk_img.png";
import uz_flag from "@/assets/uz_img.png";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

type Lang = "en" | "uz";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const flags: Record<Lang, string> = {
    en: uk_flag,
    uz: uz_flag,
  };

  const currentLang = i18n.language as Lang;

  const safeLang: Lang = currentLang === "uz" ? "uz" : "en";

  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center gap-2 border-0 shadow-none"
          >
            <img
              src={flags[safeLang]}
              alt="flag"
              className="w-8 h-6 object-cover"
            />
            <span className="text-xl">{i18n.language}</span>
            <ChevronDown size={22} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => changeLanguage("en")}>
            English
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => changeLanguage("uz")}>
            Uzbek
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSwitcher;
