import footer_logo from "@/assets/footer-logo.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#009688] ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-7">
          <img className="w-30 pt-10" src={footer_logo} alt="footer logo" />

          <div className="flex gap-8">
            <a className="text-white" href="#">
              {t("Home")}
            </a>
            <a className="text-white" href="">
              {t("About")}
            </a>
            <a className="text-white" href="">
              {t("Service")}
            </a>
            <a className="text-white" href="">
              {t("Contact Us")}
            </a>
          </div>

          <div>
            
          </div>

          <div className="border w-full"></div>

          <div className="pb-10">
            <span className="text-white">Copyright Satyam Studio</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
