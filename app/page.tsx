"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Wizard from "@/components/wizard/Wizard";
import HeroScene from "@/components/three/HeroScene";
import PopularSchemes from "@/components/home/PopularSchemes";
import WhoIsThisFor from "@/components/home/WhoIsThisFor";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

import SchemesTicker from "@/components/home/SchemesTicker";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  const [started, setStarted] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Ticker and Navbar are handled globally or specifically here? 
          Wait, user wants sticky navbar globally. We put Navbar in page.tsx previously. 
          To fix "Continuous line in middle", we should ensure flow is: Ticker -> Navbar -> Hero.
      */}
      <div className="relative z-50">
        <SchemesTicker />
        <Navbar />
      </div>
      <main className="relative min-h-[110vh] flex flex-col items-center justify-start pt-10 overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0 h-screen">
          <HeroScene />
          {/* Gradients for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_transparent_0%,_white_80%)] pointer-events-none" />
        </div>

        <div className="z-10 w-full max-w-5xl mx-auto relative px-4">
          {/* Navbar */}


          {!started ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center gap-8 text-center mt-10 md:mt-20"
            >
              <div className="space-y-6 max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md text-[var(--color-brand)] text-sm font-bold border border-blue-100 shadow-sm cursor-default"
                >
                  <Sparkles className="w-4 h-4 fill-current" />
                  <span className="tracking-wide uppercase text-xs">#1 Subsidy Matching Platform</span>
                </motion.div>

                <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-900 leading-[1] drop-shadow-sm">
                  Sarkari Subsidy, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand)] to-blue-400">Simplified.</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium">
                  Find the right MP Government scheme for your business in <span className="text-gray-900 bg-yellow-200/50 px-2 rounded-lg decoration-2 underline decoration-yellow-400 decoration-wavy underline-offset-4">60 seconds</span>.
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative mt-8"
              >
                <div className="absolute -inset-2 bg-[var(--color-brand)] rounded-[2rem] blur-xl opacity-40 animate-pulse" />
                <Button
                  size="lg"
                  variant="shiny"
                  onClick={() => setStarted(true)}
                  className="relative text-xl px-16 py-9 rounded-[1.5rem] shadow-2xl font-bold border border-white/20"
                >
                  Start Matching Now
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </motion.div>

              <div className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm font-bold text-gray-500 uppercase tracking-widest">
                <div className="flex items-center gap-3 bg-white/50 backdrop-blur px-4 py-2 rounded-lg border border-gray-100">
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_theme(colors.green.500)]" />
                  <span>Updated for 2026</span>
                </div>
                <div className="flex items-center gap-3 bg-white/50 backdrop-blur px-4 py-2 rounded-lg border border-gray-100">
                  <Building className="w-4 h-4 text-blue-500" />
                  <span>50+ Live Schemes</span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full mt-10"
            >
              <Wizard onBack={() => setStarted(false)} />
            </motion.div>
          )}
        </div>
      </main>

      {!started && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <PopularSchemes />
          <WhoIsThisFor />

          <footer className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-4 text-center">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">M</div>
              <p className="text-xl font-semibold mb-2">ME Sahay</p>
              <p className="text-gray-400 mb-8">Empowering Entrepreneurs of Madhya Pradesh</p>
              <div className="w-full h-px bg-white/10 max-w-xs mx-auto mb-8" />
              <p className="opacity-40 text-sm">© 2026 ME Sahay. Built with ❤️ for Hackathon.</p>
            </div>
          </footer>
        </motion.div>
      )}
    </div>
  );
}

// Helper icon component since we removed the image import
import { Building } from "lucide-react";
