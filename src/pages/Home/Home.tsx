import ExpertPage from "@/components/home/ExpertPage";
import HomeHeader from "@/components/home/HomeHeader";
import OurServices from "@/components/services/OurServices";

const Home = () => {
  return (
    <div className="min-h-[60vh]">
      <HomeHeader />
      <OurServices />
      <ExpertPage />
    </div>
  );
};

export default Home;
