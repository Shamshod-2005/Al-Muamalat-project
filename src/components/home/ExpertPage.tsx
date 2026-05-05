import person_img from "@/assets/expert-page/person.png";
import { useTranslation } from "react-i18next";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { LiaTelegramPlane } from "react-icons/lia";
import { Card, CardContent } from "../ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";

const ExpertPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="text-center pb-10 mt-30">
        <h1 className="font-bold text-5xl pb-5">{t("Our Expert Team ")}</h1>
        <span className="text-[#686868] text-xl max-w-lg mx-auto block ">
          Expert guidance for managing funds in alignment with Islamic
          peinciples, helping ypur make informed, halal invesment decisions
        </span>
      </div>

      <div className="flex justify-center mb-15">
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent className="">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-[#D2E6E4] p-6">
                    <CardContent className="flex items-center gap-x-15">
                      <div>
                        <img
                          className="w-250  object-cover"
                          src={person_img}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col gap-10 w-400">
                        <h1 className="font-bold text-3xl">
                          {t("Dr. Mezbah Uddin Ahmed")}
                        </h1>
                        <span className="text-xl">
                          {t(
                            " It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
                          )}
                        </span>
                        <div className="flex gap-8 text-2xl">
                          <LiaTelegramPlane
                            size={30}
                            className="cursor-pointer hover:text-blue-500"
                          />
                          <FaInstagram
                            size={30}
                            className="cursor-pointer hover:text-pink-500"
                          />
                          <FiFacebook
                            size={30}
                            className="cursor-pointer hover:text-blue-600"
                          />
                          <CiTwitter
                            size={30}
                            className="cursor-pointer hover:text-sky-500"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default ExpertPage;
