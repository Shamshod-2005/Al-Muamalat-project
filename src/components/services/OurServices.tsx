import { useTranslation } from "react-i18next";
import {
  BookOpen,
  ShieldCheck,
  GraduationCap,
  Banknote,
  BarChart3,
  Shield,
  PiggyBank,
  Globe2,
  Coins,
  type LucideIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { Button } from "../ui/button";

const OurService = () => {
  const { t } = useTranslation();

  const data: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[] = [
    {
      title: "Consulting Services",
      description:
        "Deliver Sharia-compliant products, contracts, and market-ready solutions with end-to-end advisory support—from feasibility assessment and structuring to documentation and implementation. We help you align every step with Sharia principles and applicable regulations, strengthen governance and risk controls, and ensure commercial viability through practical legal and tax structuring.",
      icon: BookOpen,
    },
    {
      title: "Sharia Advisory and Audit Service",
      description:
        "We provide independent Sharia advisory for Islamic banks, microfinance institutions, Takaful providers, and other financial entities through continuous compliance monitoring and structured Sharia audits. Our review covers products, contracts, and operational processes to ensure alignment with Sharia principles, strengthen governance, and reduce compliance risk.",
      icon: ShieldCheck,
    },
    {
      title: "Education & Professional Development",
      description:
        "As an AAOIFI official land partner in Uzbekistan, we deliver practical Islamic finance training based on international standards and accounting principles, including AAOIFI-aligned programs and certification preparation. Through focused courses, seminars, and workshops, we strengthen professionals’ technical skills and help teams apply Sharia-compliant finance confidently in real banking operations.",
      icon: GraduationCap,
    },
    {
      title: "For Islamic Banks",
      description:
        "We support Islamic Banks and Islamic Banking Windows with proven advisory services across strategy, product development, and operations. Our work includes Sharia-compliant structuring, contract and policy documentation, operating model design, and staff capacity building—helping institutions launch confidently, scale sustainably, and maintain strong compliance and control environments.",
      icon: Banknote,
    },
    {
      title: "Islamic Capital Market",
      description:
        "We provide expert guidance across the Islamic Capital Market—supporting the structuring of Sharia-compliant investment products, sukuk issuance, and ethical portfolio solutions. Our advisory covers transaction structuring, documentation review, Sharia compliance assurance, and stakeholder coordination to help institutions execute offerings that are credible, compliant, and attractive to investors.",
      icon: BarChart3,
    },
    {
      title: "Takaful",
      description:
        "Our experts support the development and management of Takaful (Islamic insurance) products—from model selection and product design to documentation and operational setup. We help ensure alignment with Sharia principles, strengthen governance and risk controls, and build practical processes that deliver transparent value and fair outcomes for policyholders.",
      icon: Shield,
    },
    {
      title: "Islamic Fund Management",
      description:
        "We support clients in structuring and managing Sharia-compliant funds and halal investment portfolios, aligning strategy, governance, and screening criteria with Islamic principles. Our advisory covers fund setup, investment policy design, Sharia compliance monitoring, and portfolio allocation recommendations—helping investors grow wealth responsibly with transparent, compliant investment processes.",
      icon: PiggyBank,
    },
    {
      title: "International Cooperation",
      description:
        "We help local organizations in the Islamic finance sector build practical partnerships with leading international institutions—connecting you with banks, investors, Takaful operators, and industry partners across key markets. Our support includes partner identification, outreach and introductions, meeting facilitation, cooperation frameworks (MoUs/agreements), and follow-through to turn discussions into implementable joint initiatives.",
      icon: Globe2,
    },
    {
      title: "Zakat Accounting",
      description:
        "We assist businesses, financial institutions, and entrepreneurs with accurate zakat calculation and structured distribution in line with Sharia principles. Our support includes identifying zakatable assets and liabilities, applying appropriate calculation methods, preparing clear zakat reports, and guiding the distribution process to ensure transparency, proper documentation, and responsible compliance.",
      icon: Coins,
    },
  ];

  const cardColors = [
    "#DEEAFF",
    "#D5F6ED",
    "#FBE2F4",
    "#E2DBF9",
    "#EBEFF3",
    "#FFEDB6",
    "#DEEAFF",
    "#D5F6ED",
    "#FBE2F4",
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
                className="w-full h-full justify-between rounded-[26px] px-6 py-8 shadow-lg"
                style={{ backgroundColor: cardColors[index] }}
              >
                <CardHeader className="gap-6">
                  <CardTitle className="flex items-center gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
                      <item.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h2 className="font-bold text-2xl w-80">{item.title}</h2>
                    </div>
                  </CardTitle>
                  <CardDescription className="pt-6 w-100 text-base leading-relaxed text-slate-700">
                    <span>{item.description}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto pt-8">
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

export default OurService;
