import React from "react";
import BlurFade from "../magicui/blur-fade";
import { BLUR_FADE_DELAY } from "@/app/page";
import { DATA } from "@/data/resume";
import { ResumeCard } from "../resume-card";

const WorkSection = () => {
  return (
    <section className="ms-5 md:mx-20 lg:mx-56 my-10" id="work">
      <div className="flex min-h-0 flex-col gap-5">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-4xl font-bold">Work Experience</h2>
        </BlurFade>
        {DATA.work.map((work, id) => (
          <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
            <ResumeCard
              key={work.company}
              logoUrl={work.logoUrl}
              altText={work.company}
              title={work.company}
              subtitle={work.title}
              href={work.href}
              badges={work.badges}
              period={`${work.start} - ${work.end ?? "Present"}`}
              description={work.description}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
