import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import header_img from "@/assets/home-header.png";
import button_img from "@/assets/Button.png";

const HomeHeader = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#009688] mb-15 pb-2 pt-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          {/* Left section */}
          <div className="flex flex-col gap-15">
            <div className="">
              <span className="bg-white rounded-sm px-4 py-2">
                {t("Seeking Knowledge is an Obligation in Islam")}
              </span>
            </div>

            <div>
              <h1 className="text-6xl w-3xl font-bold text-white leading-18">
                {t(
                  "Enhance Your Understanding of Islamic Ethicts with AI-Muamalat",
                )}
              </h1>
            </div>
            <div className="relative ">
              <Button className="px-10 py-7 bg-[#FD661F]">
                {t("STUDENT'S OPNION ")}
              </Button>
              <img
                src={button_img}
                alt=""
                className="absolute top-1 left-48 "
              />
            </div>
          </div>
          {/* Right section */}
          <div>
            <img src={header_img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
