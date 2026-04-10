import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Platforms } from "@/components/platforms";
import { Problem } from "@/components/problem";
import { Process } from "@/components/process";
import { Work } from "@/components/work";
import { CreativesMarquee } from "@/components/creatives-marquee";
import { Pricing } from "@/components/pricing";
import { Fit } from "@/components/fit";
import { FAQ } from "@/components/faq";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Platforms />
        <Problem />
        <Process />
        <Work />
        <CreativesMarquee />
        <Pricing />
        <Fit />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
