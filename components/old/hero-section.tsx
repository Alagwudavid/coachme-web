"use client";

import React, { useRef } from "react";
import { Rss } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Button } from "../ui/button";
import Image from "next/image";
// import { "LocalImage" } from "@/public/analytics-dashboard.png";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-12 flex items-center justify-center">
      <div className="container mx-auto max-w-6xl relative overflow-visible">
        <div className="flex items-center justify-center min-h-[70vh]">
          <motion.div
            ref={ref}
            className="w-full mx-auto text-center space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="max-w-4xl mx-auto space-y-8">
              <motion.div
                variants={itemVariants}
                className="flex justify-center"
              >
                <Image
                  src="/logo.png"
                  alt="Bitroot Logo"
                  width={32}
                  height={32}
                  className="w-12 h-12"
                />
              </motion.div>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-none border border-primary mx-auto"
                variants={itemVariants}
              >
                <Rss className="w-5 h-5 text-primary animate-pulse" />
                <span className="text-sm font-medium text-secondary">
                  Join the waitlist for Q1 2026
                </span>
              </motion.div>
              <motion.div className="space-y-3" variants={itemVariants}>
                <h2 className="text-4xl sm:text-6xl font-semibold text-foreground leading-tight">
                  Teach, engage, and learn
                </h2>
                <h2 className="text-4xl sm:text-6xl font-normal text-secondary/50 leading-tight">
                  all in one place
                </h2>
              </motion.div>
              <motion.p
                className="text-lg text-foreground max-w-3xl mx-auto leading-relaxed"
                variants={itemVariants}
              >
                The all-in-one platform for African experts to launch live
                classes. We handle the Escrow payments, scheduling, and student
                logistics - you just{" "}
                <span className="font-semibold italic">teach</span>.
              </motion.p>
              <motion.div
                className="flex justify-center pt-4"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Button
                    className="px-12 py-6 bg-[#37322f] hover:bg-primary text-white rounded-full font-medium text-base shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] cursor-pointer transition-colors"
                    onClick={() =>
                      document
                        .getElementById("waitlist-form")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Join the Wait
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={imageVariants}
          transition={{ delay: 0.2 }}
        >
          <Image
            src="/assets/puzzles.png"
            alt="Image of puzzles"
            width={32}
            height={32}
            className="w-32 h-32 absolute -translate-x-1/3 -translate-y-1/3 top-0 left-0 animate-float"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={imageVariants}
          transition={{ delay: 0.3 }}
        >
          <Image
            src="/assets/multilingual.png"
            alt="Image of puzzles"
            width={32}
            height={32}
            className="w-32 h-32 absolute translate-x-1/3 -translate-y-1/3 top-0 right-0 animate-float-delay-1"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={imageVariants}
          transition={{ delay: 0.4 }}
        >
          <Image
            src="/assets/time-management.png"
            alt="Icon for time management"
            width={32}
            height={32}
            className="w-32 h-32 absolute -translate-x-1/3 translate-y-1/3 bottom-0 left-0 animate-float-delay-2"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={imageVariants}
          transition={{ delay: 0.5 }}
        >
          <Image
            src="/assets/multicurrency.png"
            alt="Image of multicurrency"
            width={32}
            height={32}
            className="w-32 h-32 md:w-40 md:h-40 absolute translate-x-1/3 translate-y-1/3 bottom-0 right-0 animate-float-delay-3"
          />
        </motion.div>
      </div>
    </section>
  );
}
