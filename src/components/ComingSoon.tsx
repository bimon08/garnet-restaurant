"use client";
import { motion } from "framer-motion";
import { BackgroundBeams } from "./ui/background-beams";

const ComingSoon = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <h3 className="text-lg uppercase tracking-widest text-gray-300 mb-2">
          Our New Site Is
        </h3>
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold tracking-wide"
        >
          Coming Soon
        </motion.h1>
        <p className="text-gray-400 mt-3">Stay Tuned!</p>
      </div>

      {/* Decorative Lines (Placed below the text) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-48 h-48 border border-gray-500 absolute"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />
      </div>

      {/* Developer Credit */}
      <div className="absolute bottom-6 right-6 flex items-center gap-2 text-gray-300">
        <motion.img
          src="/bimon-profile.png" // Update with your profile image path
          alt="Bimon"
          className="w-8 h-8 rounded-full border border-gray-400"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
        <span className="text-sm">
          Developed by <span className="font-medium">Bimon</span>
        </span>
      </div>

      {/* Background Beams */}
      <BackgroundBeams />
    </div>
  );
};

export default ComingSoon;
