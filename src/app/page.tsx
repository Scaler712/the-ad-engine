import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { StatsBar } from "@/components/stats-bar";
import { Platforms } from "@/components/platforms";
import { Marquee } from "@/components/marquee";
import { Problem } from "@/components/problem";
import { Process } from "@/components/process";
import { Work } from "@/components/work";
import { Results } from "@/components/results";
import { ClientValue } from "@/components/client-value";
import { Pricing } from "@/components/pricing";
import { Fit } from "@/components/fit";
import { FAQ } from "@/components/faq";
import { Promise } from "@/components/promise";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Platforms />
        <Marquee />
        <Problem />
        <Process />
        <Work />
        <Results />
        <ClientValue />
        <Pricing />
        <Fit />
        <FAQ />
        <Promise />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
