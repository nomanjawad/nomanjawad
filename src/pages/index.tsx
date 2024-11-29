"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

const Home = () => {
  const lampConfig = {
    mobile: {
      initialWidth: "10", // Initial width of the lamp effect
      finalWidth: "20", // Final width of the lamp effect
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
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  );
};

export default Home;
