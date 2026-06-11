import ExpertPage from "@/components/home/ExpertPage";
import HomeHeader from "@/components/home/HomeHeader";
import OurServices from "@/components/services/OurServices";
import OurVideos from "@/components/services/OurVideos";

const Home = () => {
  return (
    <div className="min-h-[60vh]">
      <HomeHeader />
      <OurServices />
      <ExpertPage />
      <OurVideos />
    </div>
  );
};

export default Home;
