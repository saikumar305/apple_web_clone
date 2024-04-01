import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlighs from "./components/Highlighs";
import HowItWorks from "./components/HowItWorks";
import Model from "./components/Model";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlighs />
      <Model />
      <Features />
      <HowItWorks />

      <Footer />
    </>
  );
};

export default App;
