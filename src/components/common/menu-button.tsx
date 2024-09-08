"use client";

import React from "react";
import { motion, MotionConfig } from "framer-motion";

import { useNavigation } from "@/provider/navigation-provider";

export default function MenuButton() {
  const { isOpen, toggleNavigation } = useNavigation();

  return (
    <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
      <motion.button
        initial={false}
        onClick={toggleNavigation}
        className="relative size-9 rounded-full border-[1px] border-secondary dark:border-primary"
        animate={isOpen ? "open" : "close"}
      >
        <motion.span
          style={{
            left: "50%",
            top: "40%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute inline-block h-[2px] w-5 rounded-full bg-primary"
          variants={{
            open: {
              rotate: ["0deg", "45deg", "45deg"],
              top: ["40%", "50%", "50%"],
            },
            close: {
              rotate: ["45deg", "0deg", "0deg"],
              top: ["50%", "50%", "40%"],
            },
          }}
        ></motion.span>
        <motion.span
          style={{
            left: "50%",
            top: "55%",
            x: "-50%",
            y: "-50%",
          }}
          className="absolute inline-block h-[2px] w-5 rounded-full bg-primary"
          variants={{
            open: {
              rotate: ["0deg", "-45deg", "-45deg"],
              top: ["60%", "50%", "50%"],
            },
            close: {
              rotate: ["-45deg", "0deg", "0deg"],
              top: ["50%", "50%", "60%"],
            },
          }}
        ></motion.span>
      </motion.button>
    </MotionConfig>
  );
}