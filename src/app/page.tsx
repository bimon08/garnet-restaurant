// pages/index.js
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Restaurant</title>
        <meta name="description" content="Welcome to My Restaurant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <div
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://picsum.photos/1600/900?food')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Welcome to My Restaurant
          </h1>
          <p className="text-xl sm:text-2xl mb-8">
            Serving the best dishes since 1990
          </p>
          <a
            href="#menu"
            className="bg-red-600 text-white px-6 py-3 rounded-full text-lg hover:bg-red-700 transition duration-300"
          >
            View Menu
          </a>
        </div>
      </div>

      {/* Menu Section */}
      <div id="menu" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Our Menu
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Menu Item 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://picsum.photos/400/300?food=1"
              alt="Dish 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Grilled Salmon</h3>
              <p className="text-gray-700 mb-4">
                Freshly grilled salmon served with vegetables.
              </p>
              <p className="text-xl font-bold">$15.99</p>
            </div>
          </div>

          {/* Menu Item 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://picsum.photos/400/300?food=2"
              alt="Dish 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Pasta Carbonara</h3>
              <p className="text-gray-700 mb-4">
                Creamy pasta with bacon and parmesan.
              </p>
              <p className="text-xl font-bold">$12.99</p>
            </div>
          </div>

          {/* Menu Item 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://picsum.photos/400/300?food=3"
              alt="Dish 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Beef Steak</h3>
              <p className="text-gray-700 mb-4">
                Juicy beef steak cooked to perfection.
              </p>
              <p className="text-xl font-bold">$20.99</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 sm:py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 My Restaurant. All rights reserved.</p>
          <p>123 Main Street, City, Country</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </footer>
    </div>
  );
}
