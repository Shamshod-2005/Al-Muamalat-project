import { useTranslation } from "react-i18next";

const Edicational = () => {
  const { t } = useTranslation();

  const learn = [
    {
      text: "Gain a comprehensive understanding of Islamic finance principles and ethics.",
    },
    {
      text: "Build a portfolio with 10+ real-world projects in Islamic financial services.",
    },
    {
      text: "Learn to develop and manage Sharia-compliant financial products.",
    },
    {
      text: "Master key concepts in Islamic banking, investment, and wealth management.",
    },
    {
      text: "Understand the fundamentals of risk management in Islamic finance.",
    },
    { text: "Develop skills to work as an Islamic finance consultant." },
  ];

  const study = [
    {
      name: "Lifetime access",
    },
    {
      name: "Video lessons",
    },
    {
      name: "Tests",
    },
    {
      name: "Projects",
    },
    {
      name: "Downloadable resources",
    },
    {
      name: "Access via mobile device",
    },
  ];

  return (
    <div className="container mx-auto px-4 pb-25">
      <div>
        <div className="text-center pb-15 pt-20">
          <h2 className="font-bold text-5xl pb-5">
            {t("International educational programs")}
          </h2>
          <span className="text-[#686868] text-xl max-w-lg mx-auto block text-medium">
            {t(
              "Al Muamalat Education's international study programs offer an in-depth learning experience at leading Islamic financial institutions around the world.",
            )}
          </span>
        </div>
        <div className="grid  grid-cols-2 gap-10">
          <div className="p-10 pb-[36px] pt-[36px] pl-[33px] pr-[33px] bg-[#F3F8FF]">
            <h3 className="font-medium text-3xl text-center pb-8">
              What you’ll learn{" "}
            </h3>

            <div className="flex flex-col gap-4">
              {learn.map((item, index) => (
                <div
                  key={index}
                  className="p-4 text-[20px] rounded-lg flex items-center gap-5"
                >
                  <img
                    src="/programs/icon.svg"
                    alt="Icon"
                    className="mt-1 w-[35px] h-[35px]"
                  />

                  <span className="text-xl font-normal">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pb-[36px] pt-[36px] pl-[33px] pr-[33px] bg-[#F3F8FF]">
            <h3 className="font-medium text-3xl mx-auto text-center w-100 pb-8">
              Why should you study at "AL-MUAMALAT"?
            </h3>

            <ul className="list-disc pl-5 flex flex-col gap-8">
              {study.map((item, index) => (
                <li className="text-xl font-medium" key={index}>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edicational;
