"use client";
import { motion } from "framer-motion";
import { BackgroundBeams } from "./ui/background-beams";

const ComingSoon = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Simplified Background Overlay */}
      <div className="absolute inset-0 bg-black/50" />

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

      {/* Optimized Decorative Lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-48 h-48 border border-gray-500 absolute animate-rotate">
          <style jsx>{`
            @keyframes rotate {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
            .animate-rotate {
              animation: rotate 20s linear infinite;
              transform: translateZ(0); // Hardware acceleration
            }
          `}</style>
        </div>
      </div>

      {/* Developer Credit with Reduced Motion */}
      <div className="absolute bottom-6 right-6 flex items-center gap-2 text-gray-300">
        <img
          src="/bimon-profile.png"
          alt="Bimon"
          className="w-8 h-8 rounded-full border border-gray-400"
        />
        <span className="text-sm">
          Developed by <span className="font-medium">Bimon</span>
        </span>
      </div>

      {/* Optimized Background Beams */}
      <BackgroundBeams className="backface-hidden" />
    </div>
  );
};

export default ComingSoon;
