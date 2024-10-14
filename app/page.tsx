import About from "./_components/about-section/About";
import Contact from "./_components/contact-section/Contact";
import Home from "./_components/home-section/Home";
import Projects from "./_components/projects-section/Projects";
import Skills from "./_components/skills-section/Skills";

export default function Page() {
  return (
    <main className="flex flex-col gap-20">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
