import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { StatsBar } from "@/components/stats-bar";
import { Platforms } from "@/components/platforms";
import { Problem } from "@/components/problem";
import { Process } from "@/components/process";
import { Work } from "@/components/work";
import { Results } from "@/components/results";
import { CreativesMarquee } from "@/components/creatives-marquee";
import { Comparison } from "@/components/comparison";
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
        <Results />
        <CreativesMarquee />
        <Comparison />
        <Pricing />
        <Fit />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
