import About from "./_components/about/About";
import ContactWithStars from "./_components/contact/ContactWithStars";
// import Experience from "./_components/experience/Experience";
import Home from "./_components/home/Home";
import Projects from "./_components/projects/Projects";
import Skills from "./_components/skills/Skills";

export default function Page() {
  return (
    <main className="flex flex-col gap-20 pb-14">
      <Home />
      <About />
      <Skills />
      <Projects />
      {/* <Experience /> */}
      <ContactWithStars />
    </main>
  );
}
