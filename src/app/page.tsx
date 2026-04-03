import Preloader from "@/components/Preloader";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Journal from "@/components/Journal";
import ParallaxGrid from "@/components/ParallaxGrid";
import Specs from "@/components/Specs";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white min-h-screen selection:bg-[#FACC15] selection:text-white relative z-10">
      <div className="noise-overlay fixed inset-0 pointer-events-none z-[9999] opacity-[0.03]"></div>
      
      <Preloader />
      <Navigation />
      
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Intro />
          <Journal />
          <ParallaxGrid />
          <Specs />
          <Philosophy />
          <Footer />
        </div>
      </div>
    </main>
  );
}
