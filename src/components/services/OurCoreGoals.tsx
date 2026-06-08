import {
  Building,
  GraduationCap,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const OurCoreGoals = () => {
  const data: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[] = [
    {
      title: "Institutionalize Islamic Finance in Uzbekistan",
      description:
        "To support the development and formal integration of Islamic banking, takaful, Shariah-compliant financial services in Uzbekistan's finance in national regulations and international standards.",
      icon: Building,
    },
    {
      title: "Build Local Expertise and Professional Capacity",
      description:
        "To develop a strong base of local Islamic finance advisors and scholars through training, certification, and consulting engagement.",
      icon: GraduationCap,
    },
    {
      title: "Set High Standards of Islamic Governance and Trust",
      description:
        "To raise the level of Islamic finance compliance and ethical finance practices in Uzbekistan by helping institutions implement transparent, accountable, and aligned frameworks.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="container mx-auto px-4 mt-30">
      <div className="mb-15 text-center">
        <h2 className="font-bold text-5xl">Our Core Goals</h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {data?.map((item, index) => {
          return (
            <Card
              key={index}
              className=" w-full
    rounded-[28px]
    border
    border-slate-200
    bg-white
    px-8
    py-10
    text-center
    shadow-[0_20px_50px_rgba(15,23,42,0.08)]
    transition-all
    duration-300
    ease-in-out
    hover:-translate-y-3
    hover:shadow-[0_30px_60px_rgba(15,23,42,0.12)]"
            >
              <CardHeader className="flex flex-col items-center gap-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-900 shadow-sm">
                  <item.icon className="h-10 w-10" />
                </div>
                <CardTitle>
                  <h2 className="font-heading text-2xl font-semibold leading-tight text-slate-900">
                    {item.title}
                  </h2>
                </CardTitle>
                <CardDescription className="text-base leading-7 text-slate-600">
                  {item.description}
                </CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default OurCoreGoals;
