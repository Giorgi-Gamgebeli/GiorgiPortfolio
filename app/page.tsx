import About from "./_components/about/About";
import Contact from "./_components/contact/Contact";
// import Experience from "./_components/experience/Experience";
import Home from "./_components/home/Home";
import Projects from "./_components/projects/Projects";
import Skills from "./_components/skills/Skills";

export default function Page() {
  return (
    <main className="flex flex-col gap-20">
      <Home />
      <About />
      <Skills />
      <Projects />
      {/* <Experience /> */}
      <Contact />
    </main>
  );
}
