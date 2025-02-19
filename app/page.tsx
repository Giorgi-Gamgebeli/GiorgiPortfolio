import About from "./_components/about-section/About";
import Contact from "./_components/contact-section/Contact";
import DarkModeToggle from "./_components/DarkModeToggle";
import Header from "./_components/header/Header";
import Home from "./_components/home-section/Home";
import Projects from "./_components/projects-section/Projects";
import Skills from "./_components/skills-section/Skills";

export const revalidate = 2 * 24 * 60 * 60; // (2 days)

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-20">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <DarkModeToggle />
    </>
  );
}
