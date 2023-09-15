import Navbar from "./Navbar";
import Content from "./Content";
import HeroImage from "./HeroImage";

export default function LandingSection() {
  return (
    <div className="min-h-[100dvh] bg-no-repeat bg-cover bg-[url('bg-hero-mobile.svg')] landscape:bg-[url('bg-hero-desktop.svg')] p-[5%] bg-very-pale-cyan landscape:px-[5%] landscape:py-[3%] grid portrait:grid-rows-[0.1fr_0.8fr_0.1fr] landscape:grid-cols-2 landscape:gap-[1em] landscape:grid-rows-[0.1fr_0.9fr]">
      <Navbar />
      <Content />
      <HeroImage />
    </div>
  );
}
