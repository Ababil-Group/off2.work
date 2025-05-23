import LogoGallery from "@/components/home-english/LogoGallary";
import ContactSection from "@/components/home-english/ContactSection";
import HiringProcess from "@/components/home-english/HiringProcess";
import WorkerSection from "@/components/home-english/WorkerSection";

import HeroSection from "@/components/home-english/HeroSection";
import ServicesSection from "@/components/home-english/ServicesSection";

export default function HomePageEnglish() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <LogoGallery />
      <WorkerSection />
      <HiringProcess />
      <ContactSection />
    </div>
  );
}
