import { useEffect } from 'react';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <div 
      id="mobile-menu" 
      className={`fixed inset-0 bg-white z-20 p-6 overflow-y-auto mobile-menu ${isOpen ? 'visible' : 'hidden'}`}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Menu</h2>
        <button 
          onClick={onClose}
          className="p-2 text-gray-600"
        >
          <i className="fas fa-times text-xl"></i>
        </button>
      </div>
      <nav>
        <ul className="space-y-4">
          <Link to="/" className="btn">
          <li 
            onClick={onClose}
            className="px-4 py-3 bg-indigo-50 rounded-lg cursor-pointer flex items-center"
          >
            <i className="fas fa-home mr-3 text-indigo-600"></i>
            <span>Newsfeed</span>
          </li>
          </Link>
          <Link to="/overview" className="btn">
          <li 
            onClick={onClose}
            className="px-4 py-3 hover:bg-indigo-50 rounded-lg cursor-pointer flex items-center"
          >
            <i className="fas fa-chart-line mr-3 text-indigo-600"></i>
            <span>Overview</span>
          </li>
          </Link>
          <Link to="/marketplace" className="btn">
          <li 
            onClick={onClose}
            className="px-4 py-3 hover:bg-indigo-50 rounded-lg cursor-pointer flex items-center"
          >
            <i className="fas fa-store mr-3 text-indigo-600"></i>
            <span>Marketplace</span>
          </li>
          </Link>
          <Link to="/take-a-ride" className="btn">
          <li 
            onClick={onClose}
            className="px-4 py-3 hover:bg-indigo-50 rounded-lg cursor-pointer flex items-center"
          >
            <i className="fas fa-car mr-3 text-indigo-600"></i>
            <span>Take a Ride</span>
          </li>
          </Link>
          <Link to="/help-center" className="btn">
          <li 
            onClick={onClose}
            className="px-4 py-3 hover:bg-indigo-50 rounded-lg cursor-pointer flex items-center"
          >
            <i className="fas fa-question-circle mr-3 text-indigo-600"></i>
            <span>Help Center</span>
          </li>
          </Link>
          <Link to="/settings" className="btn">
          <li 
            onClick={onClose}
            className="px-4 py-3 hover:bg-indigo-50 rounded-lg cursor-pointer flex items-center"
          >
            <i className="fas fa-cog mr-3 text-indigo-600"></i>
            <span>Settings</span>
          </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;