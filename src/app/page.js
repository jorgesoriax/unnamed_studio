"use client";

import DyContainer from "@/components/layout/DyContainer";
import DyNavbar from "@/components/navigation/DyNavbar";
import DyFooter from "@/components/navigation/DyFooter";

import dataNavBar from "@/data/navbar";
import dataFooter from "@/data/footer";

export default function Home() {
  return (
    <main>
      <DyNavbar data={dataNavBar} />
      <DyFooter data={dataFooter} />
    </main>
  );
}
