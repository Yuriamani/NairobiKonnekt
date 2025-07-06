import { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';;

const DesktopLayout = ({ children }: { children: React.ReactNode }) => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  return (
    <div className="hidden md:flex h-screen overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar 
          isUserDropdownOpen={isUserDropdownOpen} 
          toggleUserDropdown={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
          closeUserDropdown={() => setIsUserDropdownOpen(false)}
        />

        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
           {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DesktopLayout;