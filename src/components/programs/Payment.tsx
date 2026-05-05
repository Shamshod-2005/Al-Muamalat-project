import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";

const data = [
  {
    name: "Space for creative ideas",
    description:
      "Cyber Square nourishes young aspiring minds to get a clear vision of their ideas. We guide them in analyzing and building their vision  and ideas into reality.",
  },
  {
    name: "Engaging and fun curriculum",
    description:
      "Our goal is to create an engaging system that provides exciting activities so children can understand the programming concepts thoroughly so that they can perform them on their own. With Cyber Square kids have fun while they learn without frustrations.",
  },
  {
    name: "Professional teaching methods",
    description:
      "We professionals at Cyber Square, have developed an in-depth understanding in how to teach kids and how to code. Moreover, we believe in exposing kids to real programming languages and professional tools.",
  },
];
const payment = [
  {
    title: "Space for creative ideas",
  },
  {
    title: "Engaging and fun curriculum",
  },
  {
    title: "Professional teaching methods",
  },
  {
    title: "Learn from AI & Data Science experts",
  },
  {
    title: "Courses by IIT, NIT, and IIM alumni",
  },
  {
    title: "UK certification upon completion",
  },
  {
    title: "Personalized one-to-one training",
  },
];

const Payment = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 pb-25">
      <div className="grid grid-cols-2  border ">
        <div className="p-20 border bg-[#009688] ">
          <h2 className="font-bold text-4xl text-white">{t("Our Services")}</h2>

          <div className="pt-16 flex flex-col gap-8">
            {data.map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex gap-3 items-center">
                  <img
                    src="/programs/icon.svg"
                    className="w-[35px] h-[35px] brightness-0 invert"
                  />
                  <h3 className="text-[22px] text-white font-semibold">
                    {item.name}
                  </h3>
                </div>
                <p className="text-base text-white font-medium w-100">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-20 ">
          <h2 className="font-bold text-4xl">{t("Payment")}</h2>
          <div className="space-y-3 pt-16 pb-16">
            {payment.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-2 rounded-md hover:bg-gray-50"
              >
                <span className="mt-2 w-2 h-2 bg-[#009688] rounded-full" />
                <p className="font-normal text-lg">{item.title}</p>
              </div>
            ))}
          </div>
          <Button className="bg-[#009688] px-8 py-6 rounded-sm font-semibold text-lg ">
            {t("Purchase Now")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
