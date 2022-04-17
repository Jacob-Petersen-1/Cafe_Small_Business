import BackGroundVideo from "../../components/BackGroundVideo/BackGroundVideo";
import SideNavigationBar from "../../components/SideNavigationBar/SideNavigationBar";
import About from "../../components/About/About";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div>
      <SideNavigationBar className="scrollChild" />
      <div className="landing">
        <BackGroundVideo className="scrollChild" />
        <About className="scrollChild" />
      </div>
    </div>
  );
};
export default LandingPage;
