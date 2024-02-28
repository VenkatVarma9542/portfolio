import Navbar from "./Componets/Navbar/Navbar";
import "./App.css";
import { IntroSection } from "./Sections/IntroSection/IntroSection";
import Slider from "./Sections/Projectstwo/Projects";
import Projects from "./Sections/Projectstwo/Projects";

export default function App() {
  return (
    <>
      <Navbar />
      <IntroSection />
      <Projects />
    </>
  );
}
