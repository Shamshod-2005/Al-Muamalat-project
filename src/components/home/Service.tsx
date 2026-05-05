import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { Button } from "../ui/button";

import img1 from "@/assets/service-img/img1.png";
import img2 from "@/assets/service-img/img2.png";
import img3 from "@/assets/service-img/img3.png";
import img4 from "@/assets/service-img/img4.png";
import img5 from "@/assets/service-img/img5.png";
import img6 from "@/assets/service-img/img6.png";

const Service = () => {
  const { t } = useTranslation();

  const data = [
    {
      title: "Islamic Fund Management",
      description:
        "We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.",
      icon: img1,
    },
    {
      title: "International Relations",
      description:
        "We establish connections with local and international organizations to promote Islamic financial systems and create partnerships that support financial inclusion.",
      icon: img2,
    },
    {
      title: "Education and Training",
      description:
        "We offer short-term training courses, seminars, and conferences conducted by experts, along with study tours to leading Islamic financial institutions.",
      icon: img3,
    },
    {
      title: "For Islamic Banks",
      description:
        "We provide experienced consulting on the establishment and management of Islamic banks and branches. We support the development of competitive financial products and services based on Shariah principles.",
      icon: img4,
    },
    {
      title: "Islamic Capital Market",
      description:
        "We provide expert advice on the Islamic capital market, including Shariah-compliant investment products, sukuk issuance, and ethical portfolio management.",
      icon: img5,
    },
    {
      title: "Shariah Compliance Audit",
      description:
        "We provide Shariah supervision and audit services, examining the compliance of business models with Shariah principles.",
      icon: img6,
    },
  ];

  const cardColors = [
    "#DEEAFF",
    "#D5F6ED",
    "#FBE2F4",
    "#E2DBF9",
    "#EBEFF3",
    "#FFEDB6",
  ];

  return (
    <div className="container mx-auto px-4">
      <div>
        <div className="text-center pb-15 ">
          <h1 className="font-bold text-5xl pb-5">{t("Our services")}</h1>
          <span className="text-[#686868] text-xl max-w-lg mx-auto block ">
            {t(
              "Expert guidance for managing funds in alignment with Islamic peinciples, helping ypur make informed, halal invesment decisions",
            )}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {data?.map((item, index) => {
            return (
              <Card
                className="w-full"
                style={{ backgroundColor: cardColors[index] }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-5">
                    <div>
                      <img src={item.icon} alt="" />
                    </div>
                    <div>
                      <h2 className="font-bold text-2xl w-40">{item.title}</h2>
                    </div>
                  </CardTitle>
                  <CardDescription className="pt-6 w-85">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <Button className="w-full py-5">Learn more</Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
