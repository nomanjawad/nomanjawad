"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
  lampConfig,
}: {
  children: React.ReactNode;
  className?: string;
  lampConfig: {
    mobile: { initialWidth: string; finalWidth: string };
    desktop: { initialWidth: string; finalWidth: string };
    lampColors: {
      lightColor: string;
      backgroundColor: string;
    };
  };
}) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
  const config = isMobile ? lampConfig.mobile : lampConfig.desktop;

  return (
    <div
      className={cn(
        `relative flex lg:min-h-screen sm:min-h-[75vh] flex-col items-center justify-center overflow-hidden bg-${lampConfig.lampColors.backgroundColor} w-full z-0`,
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 mt-60">
        <motion.div
          initial={{
            opacity: 0.5,
            width: `${parseInt(config.initialWidth)}rem`,
          }}
          whileInView={{
            opacity: 1,
            width: `${parseInt(config.finalWidth)}rem`,
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className={`absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-${lampConfig.lampColors.lightColor} via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]`}
        >
          <div
            className={`absolute  w-[100%] left-0 bg-${lampConfig.lampColors.backgroundColor} h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]`}
          />
          <div
            className={`absolute  w-40 h-[100%] left-0 bg-${lampConfig.lampColors.backgroundColor}  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]`}
          />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0.5,
            width: `${parseInt(config.initialWidth)}rem`,
          }}
          whileInView={{
            opacity: 1,
            width: `${parseInt(config.finalWidth)}rem`,
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className={`absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-${lampConfig.lampColors.lightColor} text-white [--conic-position:from_290deg_at_center_top]`}
        >
          <div
            className={`absolute  w-40 h-[100%] right-0 bg-${lampConfig.lampColors.backgroundColor}  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]`}
          />
          <div
            className={`absolute  w-[100%] right-0 bg-${lampConfig.lampColors.backgroundColor} h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]`}
          />
        </motion.div>
        <div
          className={`absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-${lampConfig.lampColors.backgroundColor} blur-2xl`}
        ></div>
        <div
          className={`absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md`}
        ></div>
        <div
          className={`absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-${lampConfig.lampColors.lightColor} opacity-20 blur-3xl`}
        ></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className={`absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-${lampConfig.lampColors.lightColor} blur-2xl`}
        ></motion.div>
        <motion.div
          initial={{ width: `${parseInt(config.initialWidth)}rem` }}
          whileInView={{ width: `${parseInt(config.finalWidth)}rem` }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className={`absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-${lampConfig.lampColors.lightColor} `}
        ></motion.div>

        <div
          className={`absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-${lampConfig.lampColors.backgroundColor} `}
        ></div>
      </div>
      <div className="bg-lines">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="relative z-50 flex -translate-y-60 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
