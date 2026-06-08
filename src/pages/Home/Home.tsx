import ExpertPage from "@/components/home/ExpertPage";
import HomeHeader from "@/components/home/HomeHeader";
import OurService from "@/components/services/ourServices";

const Home = () => {
  return (
    <div className="min-h-[60vh]">
      <HomeHeader />
      <OurService />
      <ExpertPage />
    </div>
  );
};

export default Home;
