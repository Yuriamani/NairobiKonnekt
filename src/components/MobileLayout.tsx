import { useState } from 'react';
import MobileMenu from './MobileMenu';
const MobileLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="md:hidden flex flex-col h-screen">
      {/* Mobile Navbar */}
      <header className="bg-white shadow-sm z-10">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <i className="fas fa-bus text-2xl mr-2 text-indigo-600"></i>
            <h1 className="text-lg font-bold">Nairobi Konnekt</h1>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-32 pl-8 pr-3 py-1 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-transparent text-sm"
              />
              <i className="fas fa-search absolute left-2 top-2 text-gray-400 text-sm"></i>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-1 text-gray-600"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Content */}
      <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      <footer className="bg-white border-t border-gray-200 py-2 px-4 flex justify-around items-center">
        <button className="p-2 text-gray-600 hover:text-indigo-600 flex flex-col items-center">
          <i className="fas fa-home text-lg"></i>
          <span className="text-xs mt-1">Home</span>
        </button>
        <button className="p-2 text-gray-600 hover:text-indigo-600 flex flex-col items-center">
          <i className="fas fa-bell text-lg"></i>
          <span className="text-xs mt-1">Alerts</span>
        </button>
        <button className="p-2 text-gray-600 hover:text-indigo-600 flex flex-col items-center">
          <i className="fas fa-envelope text-lg"></i>
          <span className="text-xs mt-1">Messages</span>
        </button>
        <button className="p-2 text-gray-600 hover:text-indigo-600 flex flex-col items-center">
          <i className="fas fa-shopping-cart text-lg"></i>
          <span className="text-xs mt-1">Cart</span>
        </button>
        <button className="p-2 text-gray-600 hover:text-indigo-600 flex flex-col items-center">
          <div className="h-6 w-6 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-semibold">JK</div>
          <span className="text-xs mt-1">Account</span>
        </button>
      </footer>
    </div>
  );
};

export default MobileLayout;