"use client";
import { LayoutLoader } from "@/components/animation/layoutLoader";
import ContactSection from "@/components/sections/contacts";
import EducationSection from "@/components/sections/education";
import Footer from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero";
import { ProjectSection } from "@/components/sections/projects";
import { SkillSection } from "@/components/sections/skills";
import WorkSection from "@/components/sections/work";
import { analytics } from "@/lib/firebase";
import { logEvent } from "firebase/analytics";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    if (analytics) {
      logEvent(analytics, "page_view", {
        page_title: "Home",
      });
    }
  }, []);
  return (
    <LayoutLoader>
      <main className="flex flex-col min-h-[100dvh] items-center div bg-secondary">
        <HeroSection />
        <WorkSection />
        <EducationSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
        <Footer />
      </main>
    </LayoutLoader>
  );
}
