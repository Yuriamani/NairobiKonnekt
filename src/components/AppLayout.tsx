import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DesktopLayout from './DesktopLayout';
import MobileLayout from './MobileLayout';

export default function AppLayout() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile ? (
    <MobileLayout>
    <Outlet />
    </MobileLayout>
  ) : (
    <DesktopLayout>
      <Outlet />
    </DesktopLayout>
  );
}