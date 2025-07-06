import { FaHeart, FaShoppingCart, FaMobileAlt, FaTshirt, FaHome, FaGamepad, FaBaby, FaBolt, FaEye, FaStar, FaStarHalfAlt, FaEllipsisH } from 'react-icons/fa';

const Marketplace = () => {
  return (
    <div className="bg-gray-50">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Hero Banner with Multiple Promotions */}
        <section className="relative mb-10 rounded-xl overflow-hidden">
          <div className="bg-blue-100 h-96 flex items-center" style={{ backgroundImage: 'radial-gradient(circle at 75% 50%, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0) 50%)' }}>
            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 py-8 md:py-12">
                <div className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-3">FLASH SALE</div>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Summer Collection 2023</h1>
                <p className="text-lg text-gray-600 mb-6">Discover the latest trends with up to 30% off</p>
                <div className="flex items-center mb-6">
                  <span className="text-2xl font-bold text-red-600 mr-3">$99.99</span>
                  <span className="text-lg text-gray-500 line-through">$149.99</span>
                  <span className="ml-3 bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">33% OFF</span>
                </div>
                <div className="flex space-x-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                    Shop Now
                  </button>
                  <button className="border border-blue-600 text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-50 transition duration-300">
                    View Details
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <img src="https://via.placeholder.com/600x400" alt="Hero" className="h-80 object-contain" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            <button className="w-3 h-3 rounded-full bg-gray-400 hover:bg-blue-600 focus:bg-blue-600"></button>
            <button className="w-3 h-3 rounded-full bg-gray-400 hover:bg-blue-600 focus:bg-blue-600"></button>
            <button className="w-3 h-3 rounded-full bg-blue-600"></button>
          </div>
        </section>

        {/* Categories Carousel */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Shop by Categories</h2>
            <a href="#" className="text-blue-600 hover:underline">View All</a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <a href="#" className="category-card bg-white rounded-lg shadow-sm p-4 flex flex-col items-center hover:shadow-md transition duration-300">
              <div className="bg-gray-100 rounded-full p-4 mb-2">
                <FaMobileAlt className="text-2xl text-blue-500" />
              </div>
              <span className="font-medium text-gray-700">Electronics</span>
            </a>
            <a href="#" className="category-card bg-white rounded-lg shadow-sm p-4 flex flex-col items-center hover:shadow-md transition duration-300">
              <div className="bg-gray-100 rounded-full p-4 mb-2">
                <FaTshirt className="text-2xl text-blue-500" />
              </div>
              <span className="font-medium text-gray-700">Fashion</span>
            </a>
            <a href="#" className="category-card bg-white rounded-lg shadow-sm p-4 flex flex-col items-center hover:shadow-md transition duration-300">
              <div className="bg-gray-100 rounded-full p-4 mb-2">
                <FaHome className="text-2xl text-blue-500" />
              </div>
              <span className="font-medium text-gray-700">Home</span>
            </a>
            <a href="#" className="category-card bg-white rounded-lg shadow-sm p-4 flex flex-col items-center hover:shadow-md transition duration-300">
              <div className="bg-gray-100 rounded-full p-4 mb-2">
                <FaGamepad className="text-2xl text-blue-500" />
              </div>
              <span className="font-medium text-gray-700">Gaming</span>
            </a>
            <a href="#" className="category-card bg-white rounded-lg shadow-sm p-4 flex flex-col items-center hover:shadow-md transition duration-300">
              <div className="bg-gray-100 rounded-full p-4 mb-2">
                <FaBaby className="text-2xl text-blue-500" />
              </div>
              <span className="font-medium text-gray-700">Baby</span>
            </a>
            <a href="#" className="category-card bg-white rounded-lg shadow-sm p-4 flex flex-col items-center hover:shadow-md transition duration-300">
              <div className="bg-gray-100 rounded-full p-4 mb-2">
                <FaBolt className="text-2xl text-blue-500" />
              </div>
              <span className="font-medium text-gray-700">Deals</span>
            </a>
          </div>
        </section>

        {/* Trending Products */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 md:mb-0">Trending Products</h2>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <span className="text-gray-600 mr-2">Sort by:</span>
                <select className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Popularity</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest Arrivals</option>
                  <option>Top Rated</option>
                </select>
              </div>
              <a href="#" className="text-blue-600 hover:underline">View All</a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {/* Product Card */}
            <div className="product-card bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">
              <div className="relative">
                <img src="https://via.placeholder.com/300x300" alt="Product" className="w-full h-48 object-cover" />
                <div className="product-actions absolute bottom-2 left-2 right-2 flex justify-between">
                  <button className="bg-white text-gray-700 hover:bg-blue-500 hover:text-white p-2 rounded-full shadow">
                    <FaHeart />
                  </button>
                  <button className="bg-white text-gray-700 hover:bg-blue-500 hover:text-white p-2 rounded-full shadow">
                    <FaEye />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium text-gray-800 mb-1 truncate">Premium Wireless Headphones</h3>
                    <div className="text-xs text-gray-500 mb-1">by AudioTech</div>
                  </div>
                  <button className="text-gray-400 hover:text-red-500">
                    <FaHeart />
                  </button>
                </div>
                <div className="flex items-center mb-1">
                  <div className="flex text-yellow-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                  <span className="text-xs text-gray-500 ml-1">(128)</span>
                </div>
                <div className="mb-2">
                  <span className="font-bold text-lg text-gray-800">$129.99</span>
                  <span className="text-sm text-gray-500 line-through ml-2">$179.99</span>
                  <span className="text-xs bg-green-100 text-green-800 font-medium ml-2 px-1.5 py-0.5 rounded">28% off</span>
                </div>
                <div className="text-xs text-green-600 mb-2">Free shipping</div>
                <div className="flex justify-between items-center">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-sm flex items-center">
                    <FaShoppingCart className="mr-2" />
                    Add to Cart
                  </button>
                  <button className="text-gray-700 hover:text-blue-600">
                    <FaEllipsisH />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="product-card bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">
              <div className="relative">
                <img src="https://via.placeholder.com/300x300" alt="Product" className="w-full h-48 object-cover" />
                <div className="product-actions absolute bottom-2 left-2 right-2 flex justify-between">
                  <button className="bg-white text-gray-700 hover:bg-blue-500 hover:text-white p-2 rounded-full shadow">
                    <FaHeart />
                  </button>
                  <button className="bg-white text-gray-700 hover:bg-blue-500 hover:text-white p-2 rounded-full shadow">
                    <FaEye />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-800 mb-1 truncate">Smart Watch Series 5</h3>
                <div className="flex items-center mb-1">
                  <div className="flex text-yellow-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <span className="text-xs text-gray-500 ml-1">(89)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg text-gray-800">$199.99</span>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full">
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            </div>

            {/* Add more product cards as needed */}
          </div>
        </section>

        {/* Featured Brands */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Featured Brands</h2>
            <a href="#" className="text-blue-600 hover:underline">View All</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 bg-white rounded-lg p-4 shadow-sm">
            <div className="brand-logo flex items-center justify-center p-4 hover:bg-gray-50 rounded transition">
              <img src="https://via.placeholder.com/120x60" alt="Brand" className="max-h-10 object-contain" />
            </div>
            <div className="brand-logo flex items-center justify-center p-4 hover:bg-gray-50 rounded transition">
              <img src="https://via.placeholder.com/120x60" alt="Brand" className="max-h-10 object-contain" />
            </div>
            {/* Add more brand logos */}
          </div>
        </section>

        {/* Flash Sale Banner */}
        <section className="mb-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-6 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Flash Sale</h2>
              <p>Limited time offers. Prices slashed for today only!</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-white text-red-500 rounded p-2 text-center w-12">
                <div className="font-bold text-lg" id="hours">12</div>
                <div className="text-xs">Hours</div>
              </div>
              <div className="bg-white text-red-500 rounded p-2 text-center w-12">
                <div className="font-bold text-lg" id="minutes">45</div>
                <div className="text-xs">Minutes</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Marketplace