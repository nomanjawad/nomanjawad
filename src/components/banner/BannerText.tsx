"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const BannerText = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const h4Ref = useRef<HTMLHeadingElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const h3Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    console.log(sectionRef.current);
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // When the top of the section is 80% from the top of the viewport
        end: "bottom 20%", // When the bottom of the section reaches 20% from the top of the viewport
        toggleActions: "play play play play", // Play animation when triggered
      },
    });

    tl.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power4.out" }
    )
      .fromTo(
        h4Ref.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
      )
      .fromTo(
        h1Ref.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
      )
      .fromTo(
        h3Ref.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
      );
    ScrollTrigger.refresh();
  }, []);
  console.log(sectionRef.current);
  return (
    <div className="container">
      <div
        ref={sectionRef}
        className="flex flex-col items-center justify-center text-accent gap-6 font-heading"
      >
        <h4 ref={h4Ref} className="text-4xl font-extrabold tracking-widest">
          Hello, I&apos;m
        </h4>
        <h1 ref={h1Ref} className="text-9xl font-bold tracking-wide">
          Noman E Jawad
        </h1>
        <h3 ref={h3Ref} className="text-5xl tracking-wide">
          Frontend Developer
        </h3>
      </div>
    </div>
  );
};

export default BannerText;
