import React from "react";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <motion.section
      id="cta"
      className="border-y border-dashed border-slate-200 w-full max-w-5xl mx-auto px-10 sm:px-16 mt-30"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-between gap-8 px-3 md:px-10 border-x border-dashed border-slate-200 py-16 sm:py-20 -mt-10 -mb-10 w-full">
        <p className="text-xl font-medium max-w-md text-slate-800">
          Build a Professional Resume that Helps You Stand Out and get Hired..
        </p>

        {/* motion.a gives reliable hover/tap transforms; also use 'group' so nested group-hover works */}
        <motion.a
          href="https://prebuiltui.com"
          className="group relative overflow-hidden rounded py-3 px-8 bg-indigo-600 text-white shadow-md flex items-center gap-2"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          // uncomment next line and remove whileHover/whileTap if you prefer only Tailwind:
          // className="group relative overflow-hidden rounded py-3 px-8 bg-indigo-600 text-white shadow-md flex items-center gap-2 hover:scale-105"
        >
          {/* Animated radial highlight — now uses group-hover so it actually appears */}
          <span
            aria-hidden
            className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(400px 200px at 10% 30%, rgba(255,255,255,0.12), rgba(255,255,255,0) 30%)"
            }}
          />

          {/* subtle ring / glow on hover */}
          <span
            aria-hidden
            className="absolute inset-0 pointer-events-none rounded transition-shadow duration-300 group-hover:shadow-[0_8px_30px_rgba(79,70,229,0.18)]"
          />

          <span className="relative z-10 font-medium">LessGo!!</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="relative z-10"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </motion.a>
      </div>
    </motion.section>
  );
};

export default CallToAction;
