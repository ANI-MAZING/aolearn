import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Collaborations from "./components/Collaborations";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        {/* <Workflow /> */}
        <Pricing />
        <Collaborations/>
        {/* <Testimonials /> */}
        <Footer />
      </div>
    </>
  );
};

export default App;
