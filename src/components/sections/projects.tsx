"use client";
import BlurFade from "../magicui/blur-fade";
import { BLUR_FADE_DELAY } from "@/data/blur";
import { DATA } from "@/data/resume";
import { ProjectCard } from "../project-card";
import { motion } from "motion/react";

export const ProjectSection = () => {
  return (
    <section className="bg-background w-full mt-10 py-10" id="projects">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Check out my latest work
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I&apos;ve worked on a variety of projects, from simple websites
                to complex applications. Here are a few of my favorites.
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="flex justify-center">
          <a
            href="/project"
            className="relative inline-flex w-72 items-center px-12 py-3 overflow-hidden text-lg font-medium text-destructive group"
          >
            <span className="absolute inset-0 w-full h-full bg-destructive transform scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100 z-0"></span>

            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-500 transform translate-x-0 group-hover:translate-x-full ease z-10 text-destructive">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>

            {/* Text */}
            <span className="relative z-10 transition-all duration-500 transform translate-x-0 group-hover:translate-x-8  group-hover:text-white ease">
              View Our Project
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
