"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { scrollDown } from "@/assets/lottie";
import { Player } from "@lottiefiles/react-lottie-player";

const Banner = () => {
  const lampConfig = {
    mobile: {
      initialWidth: "10", // Initial width of the lamp effect
      finalWidth: "30", // Final width of the lamp effect
    },
    desktop: {
      initialWidth: "20", // Initial width of the lamp effect
      finalWidth: "40", // Final width of the lamp effect
    },
    lampColors: {
      lightColor: "accent", // Color of the light
      backgroundColor: "primary", // Background color of the lamp
    },
  };
  return (
    <LampContainer lampConfig={lampConfig}>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-transparent"
      >
        <div className="container">
          <motion.div
            className="flex gap-4 flex-col justify-center items-center "
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
            }}
          >
            <motion.h4
              className="text-5xl"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.9, // Smooth transition
                    ease: "easeOut", // Smooth easing
                  },
                },
              }}
            >
              Hello, I&apos;m
            </motion.h4>
            <motion.h1
              className="text-9xl font-bold"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.9, // Smooth transition
                    ease: "easeOut", // Smooth easing
                  },
                },
              }}
            >
              Noman E Jawad
            </motion.h1>
            <motion.h3
              className="text-6xl"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.9, // Smooth transition
                    ease: "easeOut", // Smooth easing
                  },
                },
              }}
            >
              Frontend Developer
            </motion.h3>
          </motion.div>
        </div>
        <div className="mt-9">
          <Player
            src={scrollDown}
            autoplay
            loop
            style={{ height: "auto", width: "30px" }}
          />
        </div>
      </motion.h1>
    </LampContainer>
  );
};

export default Banner;
