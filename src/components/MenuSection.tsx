'use client';
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const MenuSection = () => {
    const router = useRouter();
  return (
    <motion.div
      id="menu"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-red-50"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-red-800 mb-4 font-[cursive]"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Chinese Culinary Delights
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Authentic Flavors from the Heart of China
          </motion.p>
          <motion.div
            className="mt-4 mx-auto w-24 h-1 bg-yellow-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Dumplings */}
          <motion.div
            className="relative group bg-white rounded-xl shadow-lg overflow-hidden"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="relative h-60"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1585032226651-759b368d7246"
                alt="Chinese Dumplings"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
            </motion.div>
            <div className="p-6 relative -mt-12">
              <motion.span
                className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold block w-fit"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                Chef's Special
              </motion.span>
              <h3 className="text-2xl font-bold text-gray-800 mt-4">
                Jiaozi Dumplings
              </h3>
              <p className="text-gray-600 mt-2">
                Handmade pork and chive dumplings with black vinegar dip
              </p>
              <motion.p
                className="text-xl font-bold text-red-600 mt-4"
                whileHover={{ scale: 1.1 }}
              >
                ¥28
              </motion.p>
            </div>
          </motion.div>

          {/* Peking Duck */}
          <motion.div
            className="relative group bg-white rounded-xl shadow-lg overflow-hidden"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div className="relative h-60" whileHover={{ scale: 1.1 }}>
              <img
                src="https://images.unsplash.com/photo-1585036188212-35198095d10f"
                alt="Peking Duck"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
            </motion.div>
            <div className="p-6 relative -mt-12">
              <motion.span
                className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold block w-fit"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7 }}
              >
                Imperial Dish
              </motion.span>
              <h3 className="text-2xl font-bold text-gray-800 mt-4">
                Peking Duck
              </h3>
              <p className="text-gray-600 mt-2">
                Crispy skin duck served with pancakes and hoisin sauce
              </p>
              <motion.p
                className="text-xl font-bold text-red-600 mt-4"
                whileHover={{ scale: 1.1 }}
              >
                ¥98
              </motion.p>
            </div>
          </motion.div>

          {/* Hot Pot */}
          <motion.div
            className="relative group bg-white rounded-xl shadow-lg overflow-hidden"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div className="relative h-60" whileHover={{ scale: 1.1 }}>
              <img
                src="https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1"
                alt="Hot Pot"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
            </motion.div>
            <div className="p-6 relative -mt-12">
              <motion.span
                className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold block w-fit"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.9 }}
              >
                Sichuan Style
              </motion.span>
              <h3 className="text-2xl font-bold text-gray-800 mt-4">
                Mala Hot Pot
              </h3>
              <p className="text-gray-600 mt-2">
                Spicy broth with assorted meats, vegetables, and tofu
              </p>
              <motion.p
                className="text-xl font-bold text-red-600 mt-4"
                whileHover={{ scale: 1.1 }}
              >
                ¥128
              </motion.p>
            </div>
          </motion.div>

          {/* Dim Sum */}
          <motion.div
            className="relative group bg-white rounded-xl shadow-lg overflow-hidden"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div className="relative h-60" whileHover={{ scale: 1.1 }}>
              <img
                src="https://images.unsplash.com/photo-1585032226651-759b368d7246"
                alt="Dim Sum"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
            </motion.div>
            <div className="p-6 relative -mt-12">
              <motion.span
                className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold block w-fit"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.1 }}
              >
                Cantonese Classic
              </motion.span>
              <h3 className="text-2xl font-bold text-gray-800 mt-4">
                Dim Sum Platter
              </h3>
              <p className="text-gray-600 mt-2">
                Assorted steamed dumplings and buns (6 pieces)
              </p>
              <motion.p
                className="text-xl font-bold text-red-600 mt-4"
                whileHover={{ scale: 1.1 }}
              >
                ¥48
              </motion.p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.button
            onClick={() => router.push("/full-menu")}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full text-lg sm:text-xl relative overflow-hidden group"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 25px rgba(229, 62, 62, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center justify-center gap-2">
              <span>Explore Full Menu</span>
              <motion.span
                className="inline-block"
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                →
              </motion.span>
            </div>
            {/* Animated background layer */}
            <motion.div
              className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MenuSection;
