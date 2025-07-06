import { useState, useEffect, useRef } from 'react';
import { 
  FaTimes, 
  FaSearch, 
  FaCog, 
  FaBars, 
  FaPhone, 
  FaVideo, 
  FaInfoCircle, 
  FaPaperclip, 
  FaSmile, 
  FaPaperPlane 
} from 'react-icons/fa';
import './message.css'

interface Conversation {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  unread: number;
  avatar: string;
  online: boolean;
}

interface Message {
  id: number;
  sender: 'customer' | 'vendor';
  text: string;
  time: string;
}

const VendorCustomerMessagingApp = () => {
  // State
  const conversations: Conversation[] = [
    { id: 1, name: 'John Smith', lastMessage: 'Thanks for the quick response!', time: '10:30 AM', unread: 2, avatar: 'J', online: true },
    { id: 2, name: 'Sarah Johnson', lastMessage: 'When will my order ship?', time: 'Yesterday', unread: 0, avatar: 'S', online: false },
    { id: 3, name: 'Mike Williams', lastMessage: 'Do you have this in other colors?', time: 'Monday', unread: 1, avatar: 'M', online: true },
    { id: 4, name: 'Emily Brown', lastMessage: 'Received the package, thanks!', time: '12/05', unread: 0, avatar: 'E', online: false },
    { id: 5, name: 'David Lee', lastMessage: 'I have a question about my order', time: '11/30', unread: 0, avatar: 'D', online: false }
];
  // const [conversations, setConversations] = useState<Conversation[]>([
  //   { id: 1, name: 'John Smith', lastMessage: 'Thanks for the quick response!', time: '10:30 AM', unread: 2, avatar: 'J', online: true },
  //   { id: 2, name: 'Sarah Johnson', lastMessage: 'When will my order ship?', time: 'Yesterday', unread: 0, avatar: 'S', online: false },
  //   { id: 3, name: 'Mike Williams', lastMessage: 'Do you have this in other colors?', time: 'Monday', unread: 1, avatar: 'M', online: true },
  //   { id: 4, name: 'Emily Brown', lastMessage: 'Received the package, thanks!', time: '12/05', unread: 0, avatar: 'E', online: false },
  //   { id: 5, name: 'David Lee', lastMessage: 'I have a question about my order', time: '11/30', unread: 0, avatar: 'D', online: false }
  // ]);

  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: 'customer', text: 'Hello, I have a question about my order', time: '10:00 AM' },
    { id: 2, sender: 'vendor', text: 'Hi there! How can I help you today?', time: '10:02 AM' },
    { id: 3, sender: 'customer', text: 'I ordered product #12345 but haven\'t received any shipping confirmation yet', time: '10:05 AM' },
    { id: 4, sender: 'vendor', text: 'Let me check that for you. Your order is being processed and will ship tomorrow morning.', time: '10:10 AM' },
    { id: 5, sender: 'customer', text: 'Great, thanks for the quick response!', time: '10:30 AM' }
  ]);

  const [messageInput, setMessageInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [sidebarActive, setSidebarActive] = useState(false);
  const [overlayActive, setOverlayActive] = useState(false);

  // Refs
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Effects
  useEffect(() => {
    // Scroll to bottom when messages change
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }

    // Random typing indicator
    const typingInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setIsTyping(true);
        setTimeout(() => setIsTyping(false), 1500);
      }
    }, 15000);

    // Random online status changes
    const statusInterval = setInterval(() => {
      setIsOnline(Math.random() > 0.3);
    }, 10000);

    return () => {
      clearInterval(typingInterval);
      clearInterval(statusInterval);
    };
  }, [messages]);

  // Functions
  const sendMessage = () => {
    const text = messageInput.trim();
    if (text) {
      const newMessage: Message = {
        id: messages.length + 1,
        sender: 'vendor',
        text: text,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages([...messages, newMessage]);
      setMessageInput('');
      
      // Simulate customer reply after 2-5 seconds
      setTimeout(simulateCustomerReply, 2000 + Math.random() * 3000);
    }
  };

  const simulateCustomerReply = () => {
    const replies = [
      "Thanks for your help!",
      "I appreciate the quick response.",
      "That sounds good, I'll wait for the update.",
      "Can you provide more details about that?",
      "Do you have any other options available?",
      "When can I expect delivery?"
    ];
    
    const randomReply = replies[Math.floor(Math.random() * replies.length)];
    
    const newMessage: Message = {
      id: messages.length + 1,
      sender: 'customer',
      text: randomReply,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMessage]);
  };

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
    setOverlayActive(!overlayActive);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="bg-gray-100 h-screen">
      {/* Overlay for mobile */}
      <div 
        className={`overlay ${overlayActive ? 'active' : ''}`}
        onClick={toggleSidebar}
      ></div>
      
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className={`sidebar bg-white w-80 border-r border-gray-200 flex flex-col ${sidebarActive ? 'active' : ''}`}>
          {/* Header */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-blue-600 text-white">
            <h1 className="text-xl font-bold">Messages</h1>
            <button 
              className="md:hidden sidebar-close"
              onClick={toggleSidebar}
            >
              <FaTimes />
            </button>
          </div>
          
          {/* Search */}
          <div className="p-3 border-b border-gray-200">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search conversations..." 
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
          
          {/* Conversation List */}
          <div className="flex-1 overflow-y-auto">
            <div className="conversation-list">
              {conversations.map(conversation => (
                <div 
                  key={conversation.id}
                  className={`p-3 border-b border-gray-200 flex items-center cursor-pointer hover:bg-gray-50 ${conversation.unread > 0 ? 'bg-blue-50' : ''}`}
                >
                  <div className={`w-10 h-10 rounded-full ${conversation.online ? 'bg-green-500' : 'bg-gray-300'} flex items-center justify-center text-white font-bold mr-3`}>
                    {conversation.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <div className="font-medium">{conversation.name}</div>
                      <div className="text-xs text-gray-500">{conversation.time}</div>
                    </div>
                    <div className="text-sm text-gray-500 truncate">{conversation.lastMessage}</div>
                  </div>
                  {conversation.unread > 0 && (
                    <div className="w-5 h-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center ml-2">
                      {conversation.unread}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* User Profile */}
          <div className="p-3 border-t border-gray-200 flex items-center bg-gray-50">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-3">V</div>
            <div className="flex-1">
              <div className="font-medium">Vendor Account</div>
              <div className="text-xs text-gray-500">Online</div>
            </div>
            <button className="text-gray-500 hover:text-gray-700">
              <FaCog />
            </button>
          </div>
        </div>
        
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-white">
            <div className="flex items-center">
              <button 
                className="md:hidden mr-2 sidebar-toggle"
                onClick={toggleSidebar}
              >
                <FaBars />
              </button>
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold mr-3">C</div>
              <div>
                <div className="font-medium">Customer Name</div>
                <div className="text-xs text-gray-500">
                  <span className={`status-indicator ${isOnline ? 'text-green-500' : 'text-gray-500'}`}>
                    {isOnline ? 'Online' : 'Offline'}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700">
                <FaPhone />
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <FaVideo />
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <FaInfoCircle />
              </button>
            </div>
          </div>
          
          {/* Messages Container */}
          <div className="chat-container bg-gray-50 p-4 flex flex-col">
            <div 
              className="messages-container overflow-y-auto mb-4 space-y-3"
              ref={messagesContainerRef}
            >
              {messages.map(message => (
                <div 
                  key={message.id}
                  className={`flex ${message.sender === 'vendor' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-xs md:max-w-md rounded-lg p-3 ${
                      message.sender === 'vendor' 
                        ? 'bg-blue-600 text-white rounded-br-none' 
                        : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                    }`}
                  >
                    <div className="text-sm">{message.text}</div>
                    <div 
                      className={`text-right mt-1 text-xs ${
                        message.sender === 'vendor' ? 'text-blue-100' : 'text-gray-500'
                      }`}
                    >
                      {message.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Typing Indicator */}
            <div 
              className={`typing-indicator bg-white p-3 rounded-lg shadow-sm mb-3 ${
                isTyping ? '' : 'hidden'
              }`}
            >
              <div className="text-sm text-gray-500">Customer is typing</div>
            </div>
            
            {/* Message Input */}
            <div className="bg-white rounded-lg shadow-sm p-3">
              <div className="flex items-center">
                <button className="text-gray-500 hover:text-gray-700 mx-2">
                  <FaPaperclip />
                </button>
                <input 
                  type="text" 
                  placeholder="Type your message..." 
                  className="flex-1 border-0 focus:outline-none focus:ring-0" 
                  id="message-input"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <button className="text-gray-500 hover:text-gray-700 mx-2">
                  <FaSmile />
                </button>
                <button 
                  className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-700" 
                  id="send-button"
                  onClick={sendMessage}
                >
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default VendorCustomerMessagingApp;