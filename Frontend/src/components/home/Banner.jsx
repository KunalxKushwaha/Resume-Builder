import React from 'react'
import { motion } from "motion/react"

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="relative w-full py-2.5 font-medium text-sm text-white text-center 
        bg-gradient-to-r from-violet-500 via-[#9938CA] to-[#E0724A] overflow-hidden"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.2 }}
      >
        {/* Shimmer highlight */}
        <motion.div
          className="absolute inset-0 bg-white/10 pointer-events-none"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "linear" }}
        />

        <p className="relative z-10">Special Deal: New AI Features Available Now!</p>
      </motion.div>
    </motion.div>
  );
};

export default Banner
