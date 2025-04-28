import React from "react";
import BlurFade from "../magicui/blur-fade";
import { BLUR_FADE_DELAY } from "@/app/page";
import { DATA } from "@/data/resume";
import { ResumeCard } from "../resume-card";

const EducationSection = () => {
  return (
    <section
      className="md:w-full lg:w-[150dvh] md:mx-20 lg:mx-56 my-10"
      id="education"
    >
      <div className="flex min-h-0 flex-col gap-5">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-4xl font-bold">Education</h2>
        </BlurFade>
        {DATA.education.map((education, id) => (
          <BlurFade
            key={education.school}
            delay={BLUR_FADE_DELAY * 6 + id * 0.05}
          >
            <ResumeCard
              key={education.school}
              href={education.href}
              logoUrl={education.logoUrl}
              altText={education.school}
              title={education.school}
              subtitle={education.degree}
              period={`${education.start} - ${education.end}`}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
