import React from "react";
import BlurFade from "../magicui/blur-fade";
import { BLUR_FADE_DELAY } from "@/data/blur";
import { DATA } from "@/data/resume";
import { Badge } from "../ui/badge";
import Image from "next/image";

export const SkillSection = () => {
  return (
    <section
      className="md:w-full lg:w-[150dvh] flex justify-center mt-5 md:ms-5 lg:ms-0"
      id="skills"
    >
      <div className="flex flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-4xl font-bold">Skills</h2>
        </BlurFade>
        <div className="md:w-full lg:w-[150dvh] flex justify-center">
          <div className="flex flex-wrap gap-5">
            {DATA.skills.map((skill, id) => (
              <BlurFade
                key={skill.alt}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              >
                <Image
                  width={80}
                  height={80}
                  src={skill.url}
                  alt={skill.alt}
                  className="grayscale hover:grayscale-0"
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
