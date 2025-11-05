import "./App.css";
import Navbar from "./components/Navbar";
import Hero3D from "./components/Hero3D";
import AcademiaSection from "./components/AcademiaSection";
import ComunidadSection from "./components/ComunidadSection";
import TeamSection from "./components/TeamSection";
import Footer from "./components/Footer";
import SuccessVideoCarousel from "./components/SuccessVideoCarousel";
import PlanesEnigma from "./components/PlanesEnigma";
import PlanesInteractive from "./components/PlanesInteractive";
import WhatsappButton from "./components/WhatsappButton";

function App() {
  return (
    <>
      <div className="min-h-screen w-full  bg-glack text-white">
        <Navbar />
        <main id="home">
          <Hero3D />
          <PlanesInteractive />
          <AcademiaSection />
          <TeamSection />
          <ComunidadSection />
          <SuccessVideoCarousel />
        </main>
        <WhatsappButton />
        <Footer />
      </div>
    </>
  );
}

export default App;
