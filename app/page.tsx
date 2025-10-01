import { AnimatedBackground } from "@/components/animated-background";
import { ThreeBackground } from "@/components/three-background";
import { ParticleSystem } from "@/components/particle-system";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Stats } from "@/components/stats";
import { HowItWorks } from "@/components/how-it-works";
import { CTA } from "@/components/cta";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <ThreeBackground />
      <ParticleSystem />
      <AnimatedBackground />
      <Hero />
      <Features />
      <Stats />
      <HowItWorks />
      <CTA />
    </main>
  );
}
