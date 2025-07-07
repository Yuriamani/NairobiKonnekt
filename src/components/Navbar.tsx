import { Link } from 'react-router-dom';

interface NavbarProps {
  isUserDropdownOpen: boolean;
  toggleUserDropdown: () => void;
  closeUserDropdown: () => void;
}

const Navbar = ({ isUserDropdownOpen, toggleUserDropdown }: NavbarProps) => {
  return (
    <header className="bg-white shadow-sm z-10">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center flex-1 max-w-xl">
          <div className="relative w-full">
            <input 
              type="text" 
              placeholder="Search businesses, rides..." 
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
          </div>
        </div>
        <div className="flex items-center space-x-4 ml-6">
          <Link to="/notifications" className="relative p-2 text-gray-600 hover:text-indigo-600">
            <i className="fas fa-bell text-xl"></i>
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          </Link>
          <Link to="/message" className="relative p-2 text-gray-600 hover:text-indigo-600">
            <i className="fas fa-envelope text-xl"></i>
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
          </Link>
          <Link to="/cart" className="relative p-2 text-gray-600 hover:text-indigo-600">
            <i className="fas fa-shopping-cart text-xl"></i>
            <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center">3</span>
          </Link>
          <div className="relative">
            <button 
              onClick={toggleUserDropdown}
              className="flex items-center space-x-2 focus:outline-none" 
              id="user-menu"
            >
              <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">JK</div>
              <i className="fas fa-chevron-down text-xs text-gray-500"></i>
            </button>
            <div 
              className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 ${isUserDropdownOpen ? 'block' : 'hidden'}`}
              id="user-dropdown"
            >
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;