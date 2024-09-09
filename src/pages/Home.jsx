import About from "../components/homeComponents/about/About";
import LatestNews from "../components/homeComponents/letestNews/LatestNews";
import Message from "../components/homeComponents/message/Message";
import Agreement from "../components/homeComponents/performance_agreement/Agreement";
import Feedback from "../components/homeComponents/studentFeedback/Feedback";
import Banner from "../components/homeComponents/UniversityNumber/banner/Banner";
import UniversityCounter from "../components/homeComponents/UniversityNumber/UniversityCounter";

const Home = () => {
  return (
    <div>
      <Banner/>  
      <Message/> 
      <About />
      <UniversityCounter />
      <LatestNews />
      <Agreement/>
      <Feedback/>
    </div>
  );
};

export default Home;
