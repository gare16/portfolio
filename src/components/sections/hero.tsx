import BlurFadeText from "../magicui/blur-fade-text";
import { DATA } from "@/data/resume";
import BlurFade from "../magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";
import { BLUR_FADE_DELAY } from "@/data/blur";

const HeroSection = () => {
  return (
    <section
      className="w-full flex justify-center bg-secondary min-h-[70dvh]"
      id="hero"
    >
      <div className="w-full flex flex-col md:flex-row min-h-[70dvh] md:mx-20 lg:mx-56 gap-10 md:gap-2 px-4 md:px-0">
        {/* left */}
        <div className="flex flex-col justify-center w-full md:w-1/2 min-h-[40dvh] gap-6 md:gap-4">
          <BlurFadeText
            delay={BLUR_FADE_DELAY}
            text={DATA.name}
            className="text-4xl md:text-7xl text-primary uppercase font-extrabold"
          />
          <BlurFadeText
            delay={BLUR_FADE_DELAY}
            text={DATA.description}
            className="text-justify text-muted max-w-full md:max-w-72"
          />
          <div className="w-16 md:w-20 h-2 bg-destructive border border-destructive rounded-r-lg rounded-b-lg ms-2"></div>
        </div>
        {/* right */}
        <div className="flex flex-col justify-center w-full md:w-1/2 min-h-[40dvh] gap-6 md:gap-4">
          <BlurFadeText
            delay={BLUR_FADE_DELAY}
            text={"- Introduction"}
            className="text-justify text-destructive max-w-full md:max-w-72"
          />
          <BlurFadeText
            delay={BLUR_FADE_DELAY}
            text={DATA.profession}
            className="text-4xl md:text-7xl text-primary uppercase font-extrabold"
          />
          <BlurFadeText
            delay={BLUR_FADE_DELAY}
            text={DATA.summary}
            className="text-justify text-muted max-w-full md:max-w-72"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
