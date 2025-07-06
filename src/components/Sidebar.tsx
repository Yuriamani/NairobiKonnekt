const Sidebar = () => {
  return (
    <div className="w-64 bg-indigo-800 text-white flex flex-col">
      <div className="p-4 flex items-center justify-center border-b border-indigo-700">
        <div className="flex items-center">
          <i className="fas fa-bus text-2xl mr-2 text-yellow-400"></i>
          <h1 className="text-xl font-bold">Nairobi Konnekt</h1>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="py-4">
          <li className="px-4 py-3 hover:bg-indigo-700 cursor-pointer flex items-center">
            <i className="fas fa-home mr-3 text-yellow-400"></i>
            <span>Newsfeed</span>
          </li>
          <li className="px-4 py-3 hover:bg-indigo-700 cursor-pointer flex items-center">
            <i className="fas fa-chart-line mr-3 text-yellow-400"></i>
            <span>Overview</span>
          </li>
          <li className="px-4 py-3 hover:bg-indigo-700 cursor-pointer flex items-center">
            <i className="fas fa-store mr-3 text-yellow-400"></i>
            <span>Marketplace</span>
          </li>
          <li className="px-4 py-3 hover:bg-indigo-700 cursor-pointer flex items-center">
            <i className="fas fa-car mr-3 text-yellow-400"></i>
            <span>Take a Ride</span>
          </li>
        </ul>
        <div className="px-4 py-6 border-t border-indigo-700">
          <h3 className="text-sm uppercase text-indigo-300 mb-2">Quick Links</h3>
          <ul>
            <li className="px-2 py-2 hover:bg-indigo-700 cursor-pointer flex items-center text-sm">
              <i className="fas fa-question-circle mr-3 text-yellow-400"></i>
              <span>Help Center</span>
            </li>
            <li className="px-2 py-2 hover:bg-indigo-700 cursor-pointer flex items-center text-sm">
              <i className="fas fa-cog mr-3 text-yellow-400"></i>
              <span>Settings</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;