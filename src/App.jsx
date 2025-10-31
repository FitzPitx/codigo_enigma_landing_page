import "./App.css";
import Navbar from "./components/Navbar";
import Hero3D from "./components/Hero3D";
import AcademiaSection from "./components/AcademiaSection";
import PlanesSection from "./components/PlanesSection";
import ComunidadSection from "./components/ComunidadSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen w-full  bg-glack text-white">
        <Navbar />
        <main id="home">
          <Hero3D />
          <AcademiaSection />
          <PlanesSection />
          <ComunidadSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
