import { useState, useEffect } from 'react';
import { 
  FaBolt, 
  FaBell, 
  FaTruck, 
  FaCar, 
  FaTag, 
  FaMapMarkerAlt, 
  FaCheckCircle, 
  FaCalendarCheck,
  FaBellSlash,
  FaHome,
  FaShoppingCart,
  FaUser
} from 'react-icons/fa';

interface Notification {
  id: number;
  type: 'ecommerce' | 'transport';
  title: string;
  message: string;
  icon: string;
  iconColor: string;
  time: string;
  read: boolean;
}
import './notifications.css'

const NotificationsPage = () => {
  // Notification data
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'ecommerce',
      title: 'Order Shipped',
      message: 'Your order #12345 has been shipped and will arrive in 2-3 business days.',
      icon: 'FaTruck',
      iconColor: 'text-green-500',
      time: '10 min ago',
      read: false
    },
    {
      id: 2,
      type: 'transport',
      title: 'Ride Completed',
      message: 'Your ride with driver John D. has been completed. Rate your experience.',
      icon: 'FaCar',
      iconColor: 'text-blue-500',
      time: '1 hour ago',
      read: false
    },
    {
      id: 3,
      type: 'ecommerce',
      title: 'Special Offer',
      message: 'Get 20% off on your next purchase with code SWIFT20. Limited time only!',
      icon: 'FaTag',
      iconColor: 'text-red-500',
      time: '3 hours ago',
      read: true
    },
    {
      id: 4,
      type: 'transport',
      title: 'Driver Arrived',
      message: 'Your driver has arrived at the pickup location. Please proceed to the vehicle.',
      icon: 'FaMapMarkerAlt',
      iconColor: 'text-purple-500',
      time: 'Yesterday',
      read: true
    },
    {
      id: 5,
      type: 'ecommerce',
      title: 'Payment Received',
      message: 'Your payment of $45.99 for order #12345 has been successfully processed.',
      icon: 'FaCheckCircle',
      iconColor: 'text-green-500',
      time: 'Yesterday',
      read: true
    },
    {
      id: 6,
      type: 'transport',
      title: 'Ride Scheduled',
      message: 'Your ride for tomorrow at 9:00 AM has been confirmed. We\'ll notify you when your driver is assigned.',
      icon: 'FaCalendarCheck',
      iconColor: 'text-yellow-500',
      time: '2 days ago',
      read: true
    }
  ]);

  const [currentFilter, setCurrentFilter] = useState<'all' | 'ecommerce' | 'transport' | 'unread'>('all');
  const [unreadCount, setUnreadCount] = useState(
    notifications.filter(n => !n.read).length
  );

  // Filter notifications based on current filter
  const filteredNotifications = notifications.filter(notification => {
    if (currentFilter === 'all') return true;
    if (currentFilter === 'unread') return !notification.read;
    return notification.type === currentFilter;
  });

  // Mark a notification as read
  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
    setUnreadCount(prev => prev - 1);
  };

  // Mark all notifications as read
  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
    setUnreadCount(0);
  };

  // Clear all notifications
  const clearAll = () => {
    if (window.confirm('Are you sure you want to clear all notifications?')) {
      setNotifications([]);
      setUnreadCount(0);
    }
  };

  // Simulate receiving a new notification
  useEffect(() => {
    const timer = setTimeout(() => {
      const newNotification: Notification = {
        id: notifications.length + 1,
        type: 'ecommerce',
        title: 'Flash Sale!',
        message: 'Limited-time flash sale on electronics! 30% off for the next 2 hours.',
        icon: 'FaBolt',
        iconColor: 'text-yellow-500',
        time: 'Just now',
        read: false
      };
      
      setNotifications([newNotification, ...notifications]);
      setUnreadCount(prev => prev + 1);
    }, 5000);

    return () => clearTimeout(timer);
  }, [notifications]);

  // Get icon component based on icon string
  const getIconComponent = (icon: string) => {
    switch (icon) {
      case 'FaTruck': return <FaTruck />;
      case 'FaCar': return <FaCar />;
      case 'FaTag': return <FaTag />;
      case 'FaMapMarkerAlt': return <FaMapMarkerAlt />;
      case 'FaCheckCircle': return <FaCheckCircle />;
      case 'FaCalendarCheck': return <FaCalendarCheck />;
      case 'FaBolt': return <FaBolt />;
      default: return <FaBell />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen pb-16"> {/* Added pb-16 for bottom nav spacing */}
      <main className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Notifications</h2>
            <div className="flex space-x-2">
              <button 
                onClick={markAllAsRead}
                className="px-3 py-1 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 transition text-sm"
              >
                Mark all as read
              </button>
              <button 
                onClick={clearAll}
                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition text-sm"
              >
                Clear all
              </button>
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex border-b border-gray-200 mb-6 overflow-x-auto">
            <button 
              onClick={() => setCurrentFilter('all')}
              className={`px-4 py-2 font-medium ${currentFilter === 'all' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
            >
              All
            </button>
            <button 
              onClick={() => setCurrentFilter('ecommerce')}
              className={`px-4 py-2 font-medium ${currentFilter === 'ecommerce' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
            >
              E-commerce
            </button>
            <button 
              onClick={() => setCurrentFilter('transport')}
              className={`px-4 py-2 font-medium ${currentFilter === 'transport' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
            >
              Transport
            </button>
            <button 
              onClick={() => setCurrentFilter('unread')}
              className={`px-4 py-2 font-medium ${currentFilter === 'unread' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600'}`}
            >
              Unread
            </button>
          </div>

          {/* Notifications list */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {filteredNotifications.length === 0 ? (
              <div className="p-8 text-center">
                <FaBellSlash className="text-gray-300 text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-700 mb-2">No notifications</h3>
                <p className="text-gray-500">You'll see important updates here when they appear.</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-200 max-h-[500px] overflow-y-auto custom-scrollbar">
                {filteredNotifications.map(notification => (
                  <div 
                    key={notification.id}
                    onClick={() => !notification.read && markAsRead(notification.id)}
                    className={`p-4 hover:bg-gray-50 transition cursor-pointer ${!notification.read ? 'bg-blue-50' : ''}`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`flex-shrink-0 pt-1 ${notification.iconColor}`}>
                        {getIconComponent(notification.icon)}
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start">
                          <h3 className="font-medium text-gray-900">{notification.title}</h3>
                          <span className="text-xs text-gray-500">{notification.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      Bottom Navigation
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 flex justify-around items-center py-3">
        <button className="flex flex-col items-center text-blue-600">
          <FaHome className="text-xl" />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <FaShoppingCart className="text-xl" />
          <span className="text-xs mt-1">Cart</span>
        </button>
        <button className="flex flex-col items-center text-gray-500 relative">
          <FaBell className="text-xl" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
              {unreadCount}
            </span>
          )}
          <span className="text-xs mt-1">Notifications</span>
        </button>
        <button className="flex flex-col items-center text-gray-500">
          <FaUser className="text-xl" />
          <span className="text-xs mt-1">Profile</span>
        </button>
      </nav>

     
    </div>
  );
};

export default NotificationsPage;