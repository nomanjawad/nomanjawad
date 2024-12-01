"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      sectionRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    <section ref={sectionRef} className="py-24">
      <div className="container text-accent mx-auto font-body">
        <div className="flex items-center justify-between">
          <div className="w-1/2 flex flex-col gap-5">
            <h4 className="text-base font-medium uppercase tracking-wide">
              Introduction
            </h4>
            <h2 className="text-6xl font-medium capitalize leading-snug">
              i,m a digital designer studio connecting brands to people through
            </h2>
            <p className="text-base font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex items-stretch justify-between mt-8">
              <div className="flex flex-col justify-center gap-3 items-start ">
                <p className="text-sm font-bold uppercase">born In</p>
                <h3 className="text-lg uppercase font-semibold">New york</h3>
              </div>
              <div className="flex flex-col justify-center gap-3 items-start ">
                <p className="text-sm font-bold uppercase">born In</p>
                <h3 className="text-lg uppercase font-semibold">New york</h3>
              </div>
              <div className="flex flex-col justify-center gap-3 items-start ">
                <p className="text-sm font-bold uppercase">born In</p>
                <h3 className="text-lg uppercase font-semibold">New york</h3>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/portfolio-image.jpeg"
              alt="Description of the image"
              width={600}
              height={700}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
