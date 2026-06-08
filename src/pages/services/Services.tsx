import InternationalClients from "@/components/services/InternationalClients";
import LocalClients from "@/components/services/LocalClients";
import OurCoreGoals from "@/components/services/OurCoreGoals";
import OurServices from "@/components/services/ourServices";

const Services = () => {
  return (
    <div className="mt-15 mb-25">
      <OurServices />
      <OurCoreGoals />
      <InternationalClients />
      <LocalClients />
    </div>
  );
};

export default Services;
