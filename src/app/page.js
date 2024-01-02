"use client";

import DyNavbar from "@/components/navigation/DyNavbar";
import DyHero from "@/sections/DyHero";
import DyFeatures from "@/sections/DyFeatures";
import DyPortfolio from "@/sections/DyPortfolio";
import DyPricing from "@/sections/DyPricing";
import DyFAQ from "@/sections/DyFAQ";
import DyFooter from "@/components/navigation/DyFooter";

import dataNavBar from "@/data/navbar";
import dataHero from "@/data/pages/home/hero";
import dataFeatures from "@/data/pages/home/features";
import dataPortfolio from "@/data/pages/home/portfolio";
import dataPricing from "@/data/pages/home/princing";
import dataFAQ from "@/data/pages/home/faq";
import dataFooter from "@/data/footer";

export default function Home() {
  return (
    <main>
      <DyNavbar data={dataNavBar} />
      <DyHero data={dataHero} />
      <DyFeatures data={dataFeatures} />
      <DyPortfolio data={dataPortfolio} />
      <DyPricing data={dataPricing} />
      <DyFAQ data={dataFAQ} />
      <DyFooter data={dataFooter} />
    </main>
  );
}
