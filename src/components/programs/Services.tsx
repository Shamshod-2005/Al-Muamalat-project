import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle
} from "../ui/card";

const Services = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-4 pb-25">
      <div className="grid grid-cols-3 gap-8">
        <Card className="relative mx-auto w-full  pt-0 rounded-lg">
          <img src="/person.svg" alt="Event cover" className="" />
          <div className=" flex items-center p-3 bg-[#D2E6E4]  rounded-4xl absolute left-1/2 -translate-x-1/2 top-72 ">
            <img src="/services/man.svg" alt="" />
            <img src="/services/women.svg" alt="" />
            <span className="text-base font-semibold ">40+ students</span>
          </div>
          <p className="pt-8 pr-8 pl-8 pb-0">
            {t("Start date: 21 December 2024")}
          </p>
          <CardHeader className="pr-8 pl-8">
            <CardTitle className="text-[#009688] text-2xl font-bold">
              {t("Islamic Fund Management")}
            </CardTitle>
            <CardDescription className="text-[17px]">
              {t(
                "We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.",
              )}
            </CardDescription>

            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <span className="text-[#FD661F] text-3xl font-bold">$ 250</span>
                <span className="text-[#686868] text-[22px] font-normal line-through">
                  $ 300
                </span>
              </div>
              <div className="pt-5">
                <Button className="bg-[#009688] px-5 py-5 text-base">
                  {t("Entroll Now")}
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Card className="relative mx-auto w-full  pt-0 rounded-lg">
          <img src="/person.svg" alt="Event cover" className="" />
          <div className=" flex items-center p-3 bg-[#D2E6E4]  rounded-4xl absolute left-1/2 -translate-x-1/2 top-72 ">
            <img src="/services/man.svg" alt="" />
            <img src="/services/women.svg" alt="" />
            <span className="text-base font-semibold ">40+ students</span>
          </div>
          <p className="pt-8 pr-8 pl-8 pb-0">
            {t("Start date: 21 December 2024")}
          </p>
          <CardHeader className="pr-8 pl-8">
            <CardTitle className="text-[#009688] text-2xl font-bold">
              {t("Islamic Fund Management")}
            </CardTitle>
            <CardDescription className="text-[17px]">
              {t(
                "We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.",
              )}
            </CardDescription>

            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <span className="text-[#FD661F] text-3xl font-bold">$ 250</span>
                <span className="text-[#686868] text-[22px] font-normal line-through">
                  $ 300
                </span>
              </div>
              <div className="pt-5">
                <Button className="bg-[#009688] px-5 py-5 text-base">
                  {t("Entroll Now")}
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Card className="relative mx-auto w-full  pt-0 rounded-lg">
          <img src="/person.svg" alt="Event cover" className="" />
          <div className=" flex items-center p-3 bg-[#D2E6E4]  rounded-4xl absolute left-1/2 -translate-x-1/2 top-72 ">
            <img src="/services/man.svg" alt="" />
            <img src="/services/women.svg" alt="" />
            <span className="text-base font-semibold ">40+ students</span>
          </div>
          <p className="pt-8 pr-8 pl-8 pb-0">
            {t("Start date: 21 December 2024")}
          </p>
          <CardHeader className="pr-8 pl-8">
            <CardTitle className="text-[#009688] text-2xl font-bold">
              {t("Islamic Fund Management")}
            </CardTitle>
            <CardDescription className="text-[17px]">
              {t(
                "We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.",
              )}
            </CardDescription>

            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <span className="text-[#FD661F] text-3xl font-bold">$ 250</span>
                <span className="text-[#686868] text-[22px] font-normal line-through">
                  $ 300
                </span>
              </div>
              <div className="pt-5">
                <Button className="bg-[#009688] px-5 py-5 text-base">
                  {t("Entroll Now")}
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Card className="relative mx-auto w-full  pt-0 rounded-lg">
          <img src="/person.svg" alt="Event cover" className="" />
          <div className=" flex items-center p-3 bg-[#D2E6E4]  rounded-4xl absolute left-1/2 -translate-x-1/2 top-72 ">
            <img src="/services/man.svg" alt="" />
            <img src="/services/women.svg" alt="" />
            <span className="text-base font-semibold ">40+ students</span>
          </div>
          <p className="pt-8 pr-8 pl-8 pb-0">
            {t("Start date: 21 December 2024")}
          </p>
          <CardHeader className="pr-8 pl-8">
            <CardTitle className="text-[#009688] text-2xl font-bold">
              {t("Islamic Fund Management")}
            </CardTitle>
            <CardDescription className="text-[17px]">
              {t(
                "We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.",
              )}
            </CardDescription>

            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <span className="text-[#FD661F] text-3xl font-bold">$ 250</span>
                <span className="text-[#686868] text-[22px] font-normal line-through">
                  $ 300
                </span>
              </div>
              <div className="pt-5">
                <Button className="bg-[#009688] px-5 py-5 text-base">
                  {t("Entroll Now")}
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Card className="relative mx-auto w-full  pt-0 rounded-lg">
          <img src="/person.svg" alt="Event cover" className="" />
          <div className=" flex items-center p-3 bg-[#D2E6E4]  rounded-4xl absolute left-1/2 -translate-x-1/2 top-72 ">
            <img src="/services/man.svg" alt="" />
            <img src="/services/women.svg" alt="" />
            <span className="text-base font-semibold ">40+ students</span>
          </div>
          <p className="pt-8 pr-8 pl-8 pb-0">
            {t("Start date: 21 December 2024")}
          </p>
          <CardHeader className="pr-8 pl-8">
            <CardTitle className="text-[#009688] text-2xl font-bold">
              {t("Islamic Fund Management")}
            </CardTitle>
            <CardDescription className="text-[17px]">
              {t(
                "We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.",
              )}
            </CardDescription>

            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <span className="text-[#FD661F] text-3xl font-bold">$ 250</span>
                <span className="text-[#686868] text-[22px] font-normal line-through">
                  $ 300
                </span>
              </div>
              <div className="pt-5">
                <Button className="bg-[#009688] px-5 py-5 text-base">
                  {t("Entroll Now")}
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Card className="relative mx-auto w-full  pt-0 rounded-lg">
          <img src="/person.svg" alt="Event cover" className="" />
          <div className=" flex items-center p-3 bg-[#D2E6E4]  rounded-4xl absolute left-1/2 -translate-x-1/2 top-72 ">
            <img src="/services/man.svg" alt="" />
            <img src="/services/women.svg" alt="" />
            <span className="text-base font-semibold ">40+ students</span>
          </div>
          <p className="pt-8 pr-8 pl-8 pb-0">
            {t("Start date: 21 December 2024")}
          </p>
          <CardHeader className="pr-8 pl-8">
            <CardTitle className="text-[#009688] text-2xl font-bold">
              {t("Islamic Fund Management")}
            </CardTitle>
            <CardDescription className="text-[17px]">
              {t(
                "We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.",
              )}
            </CardDescription>

            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <span className="text-[#FD661F] text-3xl font-bold">$ 250</span>
                <span className="text-[#686868] text-[22px] font-normal line-through">
                  $ 300
                </span>
              </div>
              <div className="pt-5">
                <Button className="bg-[#009688] px-5 py-5 text-base">
                  {t("Entroll Now")}
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Services;
