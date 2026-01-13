import Navbar from "./components/Navbar";
import ScrollyCanvas from "./components/ScrollyCanvas";
import Overlay from "./components/Overlay";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white">
      <Navbar />
      <div className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
