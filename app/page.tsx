"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import SparklesPreview from "@/components/SparklesPreview";
import SVGMaskEffectDemo from "@/components/SVGMaskEffectDemo";



import { FloatingNav } from "@/components/ui/FloatingNavbar";
import WorldMapDemo  from "@/components/WorldMapDemo";




const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />

        <SparklesPreview />

        <RecentProjects />

        <br />
        <br />


        <Clients />


        <br />
        <br />

        <Experience />

        <br />
        <br />
        

        <SVGMaskEffectDemo />

        <Approach />


        <WorldMapDemo />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
