import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import CinematicExplosion from "@/components/sections/CinematicExplosion";
import Engineering from "@/components/sections/Engineering";
import Stats from "@/components/sections/Stats";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-f1-carbon text-f1-silver">
      <Navbar />
      <Hero />
      <CinematicExplosion />
      <Stats />
      <Engineering />
      <Footer />
    </main>
  );
}
