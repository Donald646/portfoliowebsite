import About from "./_components/about";
import Experience from "./_components/experience";
import Header from "./_components/header";
import Navbar from "./_components/navbar";
import Projects from "./_components/projects";
import TechStack from "./_components/techStack";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className="main flex min-h-screen flex-col md:items-center p-5 font-sans">
        <Header />
        <About />
        <Experience />
        <Projects />
        <TechStack />
      </main>
    </div>
  );
}
