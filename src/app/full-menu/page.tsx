"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const FullMenuPage = () => {
  return (
    <div className="min-h-screen bg-red-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-red-800 mb-4 font-[cursive]"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            Full Menu
          </motion.h1>
          <Link
            href="/#menu"
            className="text-red-600 hover:text-red-700 transition-colors"
          >
            &larr; Back to Main Menu
          </Link>
        </div>

        {/* Add expanded menu content here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Menu Item 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800">Sushi Rolls</h3>
            <p className="text-gray-600 mt-2">
              Freshly rolled sushi with your choice of fish or vegetables.
            </p>
            <p className="text-xl font-bold text-red-600 mt-4">¥1200</p>
          </div>

          {/* Menu Item 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800">Tempura Udon</h3>
            <p className="text-gray-600 mt-2">
              A rich bowl of udon noodles topped with crispy tempura.
            </p>
            <p className="text-xl font-bold text-red-600 mt-4">¥1000</p>
          </div>

          {/* Menu Item 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800">Ramen Deluxe</h3>
            <p className="text-gray-600 mt-2">
              A steaming bowl of ramen with pork, egg, and vegetables.
            </p>
            <p className="text-xl font-bold text-red-600 mt-4">¥950</p>
          </div>

          {/* Menu Item 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800">
              Teriyaki Chicken
            </h3>
            <p className="text-gray-600 mt-2">
              Grilled chicken glazed in a sweet and savory teriyaki sauce.
            </p>
            <p className="text-xl font-bold text-red-600 mt-4">¥850</p>
          </div>

          {/* Menu Item 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800">Ebi Fry</h3>
            <p className="text-gray-600 mt-2">
              Crispy fried shrimp served with a tangy dipping sauce.
            </p>
            <p className="text-xl font-bold text-red-600 mt-4">¥1100</p>
          </div>

          {/* Menu Item 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800">
              Spicy Tuna Poke
            </h3>
            <p className="text-gray-600 mt-2">
              A refreshing bowl of tuna, avocado, and spicy sauce.
            </p>
            <p className="text-xl font-bold text-red-600 mt-4">¥1300</p>
          </div>

          {/* Menu Item 7 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800">
              Yakitori Skewers
            </h3>
            <p className="text-gray-600 mt-2">
              Grilled skewers of chicken, vegetables, and mushrooms.
            </p>
            <p className="text-xl font-bold text-red-600 mt-4">¥600</p>
          </div>

          {/* Menu Item 8 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800">Miso Soup</h3>
            <p className="text-gray-600 mt-2">
              A warm bowl of miso soup with tofu and seaweed.
            </p>
            <p className="text-xl font-bold text-red-600 mt-4">¥300</p>
          </div>

          {/* Menu Item 9 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800">
              Matcha Cheesecake
            </h3>
            <p className="text-gray-600 mt-2">
              A rich, creamy cheesecake flavored with Japanese matcha.
            </p>
            <p className="text-xl font-bold text-red-600 mt-4">¥650</p>
          </div>

          {/* Menu Item 10 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800">
              Japanese Green Tea
            </h3>
            <p className="text-gray-600 mt-2">
              Freshly brewed Japanese green tea with a light, earthy flavor.
            </p>
            <p className="text-xl font-bold text-red-600 mt-4">¥300</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullMenuPage;
