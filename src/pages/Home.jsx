import About from "../components/homeComponents/about/About";
import LatestNews from "../components/homeComponents/letestNews/LatestNews";
import Agreement from "../components/homeComponents/performance_agreement/Agreement";
import UniversityCounter from "../components/homeComponents/UniversityNumber/UniversityCounter";

const Home = () => {
  return (
    <div>
      <UniversityCounter />
      <About />
      <LatestNews />
      <Agreement/>
    </div>
  );
};

export default Home;
