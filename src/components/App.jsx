import React from "react";
import LandingSection from "./LandingSection/LandingSection";
import SectionOne from "./SectionOne/SectionOne";
import Footer from "./Footer/Footer";

export default function App() {
  return (
    <div className="text-custom-font grid gap-[5em]">
      <LandingSection />
      <SectionOne />
      <Footer />
    </div>
  );
}
