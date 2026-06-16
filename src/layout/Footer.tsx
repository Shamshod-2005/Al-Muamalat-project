import footer_logo from "@/assets/Logo.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#042d2a] text-slate-100">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="space-y-5">
            <img src={footer_logo} alt="Almuamalat logo" className="h-12" />
            <p className="max-w-sm text-sm leading-7 text-slate-300">
              {t(
                "Al Muamalat Education provides practical Islamic finance training with modern tools and global experience.",
              )}
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              {t("Explore")}
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link to="/home" className="transition hover:text-white">
                  {t("Home")}
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition hover:text-white">
                  {t("Services")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition hover:text-white">
                  {t("Contact Us")}
                </Link>
              </li>
              <li>
                <Link to="/programs/1" className="transition hover:text-white">
                  {t("Programs")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              {t("Quick Links")}
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <a href="#" className="transition hover:text-white">
                  {t("About")}
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  {t("Finance tools")}
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  {t("Purchase Now")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              {t("Contact")}
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <p>{t("Phone")}: +998 90 123 45 67</p>
              <p>{t("Email")}: info@almuamalat.com</p>
              <p>{t("Address")}: Tashkent, Uzbekistan</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-700 pt-6 text-center text-sm text-slate-500">
          <p>{t("Copyright Satyam Studio")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
