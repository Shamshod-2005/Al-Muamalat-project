import { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../ui/carousel";

const LocalClients = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  const originalLogos = [
    { image: "/local/logo1.jpg" },
    { image: "/local/logo2.png" },
    { image: "/local/logo3.png" },
    { image: "/local/logo4.png" },
    { image: "/local/logo5.jpg" },
    { image: "/local/logo6.png" },
    { image: "/local/logo7.jpg" },
    { image: "/local/logo8.jpg" },
    { image: "/local/logo9.jpg" },
  ];

  const logos = [...originalLogos, ...originalLogos, ...originalLogos];

  useEffect(() => {
    if (!carouselApi) return;

    const interval = window.setInterval(() => {
      if (carouselApi.canScrollNext()) {
        carouselApi.scrollNext();
      } else {
        carouselApi.scrollTo(0);
      }
    }, 4000); // 4 soniya interval

    return () => window.clearInterval(interval);
  }, [carouselApi]);

  return (
    <div className="container mx-auto px-12 mt-24 mb-16 select-none">
      {/* Sarlavha qismi */}
      <div className="mb-12 text-center flex flex-col items-center justify-center">
        <h2 className="font-bold text-5xl text-[#1E3E2F]">
          Our International Partners and Clients
        </h2>
      </div>

      <div className="relative px-4">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: "start",
            containScroll: "trimSnaps",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 pb-6">
            {logos.map((logo, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-[92%] sm:basis-1/2 md:basis-[42%] lg:basis-1/4 xl:basis-1/5 "
              >
                <Card className="mt-10 p-10 group overflow-hidden border-0 shadow-none bg-transparent ">
                  <CardContent className="flex h-full items-center  justify-center p-0 overflow-hidden">
                    <img
                      src={logo.image}
                      alt={`Logo ${index + 1}`}
                      className="h-42 w-full object-contain p-2 transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            className="-left-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white text-slate-800 shadow-xl hover:bg-slate-100 z-10"
            variant="secondary"
            size="icon-lg"
          />
          <CarouselNext
            className="-right-6 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white text-slate-800 shadow-xl hover:bg-slate-100 z-10"
            variant="secondary"
            size="icon-lg"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default LocalClients;
