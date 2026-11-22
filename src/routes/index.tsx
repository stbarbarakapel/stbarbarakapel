import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { VolgendeMis } from "@/components/sections/VolgendeMis";
import { Misrooster } from "@/components/sections/Misrooster";
import { DeKapel } from "@/components/sections/DeKapel";
import { EersteBezoek } from "@/components/sections/EersteBezoek";
import { Route as RouteSection } from "@/components/sections/Route";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <main>
        <VolgendeMis />
        <Misrooster />
        <DeKapel />
        <EersteBezoek />
        <RouteSection />
      </main>
      <Footer />
    </>
  );
}
