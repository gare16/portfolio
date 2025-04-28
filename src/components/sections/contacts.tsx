import React from "react";
import BlurFade from "../magicui/blur-fade";
import { BLUR_FADE_DELAY } from "@/data/blur";
import Link from "next/link";
import { DATA } from "@/data/resume";

const ContactSection = () => {
  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;m open to freelance work, collaborations, or just nerdy
              tech talk. Drop me a message and I&apos;ll get back to you asap!{" "}
              <Link
                href={`mailto:${DATA.contact.email}`}
                className="text-destructive hover:underline"
              >
                {DATA.contact.email}
              </Link>{" "}
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default ContactSection;
