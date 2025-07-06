import { useState } from 'react';
import { 
  FaShoppingCart, 
  FaReceipt, 
  FaLock, 
  FaArrowLeft, 
  FaTimes, 
  FaMinus, 
  FaPlus,
  FaPaperPlane,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal
} from 'react-icons/fa';

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
}
import './cart.css'

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones',
      description: 'Color: Blue',
      price: 99.99,
      originalPrice: 129.99,
      quantity: 1,
      image: 'https://via.placeholder.com/300x300?text=Product+1'
    },
    {
      id: 2,
      name: 'Smart Watch Series 5',
      description: 'Size: Medium',
      price: 179.99,
      originalPrice: 199.99,
      quantity: 2,
      image: 'https://via.placeholder.com/300x300?text=Product+2'
    },
    {
      id: 3,
      name: 'Wireless Charging Pad',
      description: 'Color: White',
      price: 29.99,
      quantity: 1,
      image: 'https://via.placeholder.com/300x300?text=Product+3'
    }
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(30.00);

  // Calculate cart totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.06; // 6% tax
  const total = subtotal + tax - discount;

  // Handle quantity changes
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Remove item from cart
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Apply coupon code
  const applyCoupon = () => {
    // In a real app, you would validate the coupon code with your backend
    setDiscount(30.00); // Demo discount
  };

  // Empty cart
  const emptyCart = () => {
    setCartItems([]);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Cart Items Section */}
          <div className="md:w-2/3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-blue-600 text-white px-6 py-4">
                <h2 className="text-xl font-bold flex items-center">
                  <FaShoppingCart className="mr-2" /> Your Cart
                </h2>
              </div>
              
              <div className="p-6">
                {/* Empty Cart State */}
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="empty-cart-icon mb-6 text-blue-400">
                      <div className="animate-pulse">
                        <FaShoppingCart className="text-6xl" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-700 mb-2">Your cart is empty</h3>
                    <p className="text-gray-500 mb-6 text-center">Looks like you haven't added anything to your cart yet</p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition">
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="cart-items-container max-h-96 overflow-y-auto pr-2">
                      {cartItems.map(item => (
                        <div 
                          key={item.id}
                          className="cart-item mb-6 pb-6 border-b border-gray-200 animate-fadeIn"
                        >
                          <div className="flex flex-col sm:flex-row gap-4">
                            <div className="w-full sm:w-32 h-32 bg-gray-100 rounded-lg overflow-hidden">
                              <img src={item.image} alt="Product" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
                                  <p className="text-gray-500 text-sm">{item.description}</p>
                                </div>
                                <button 
                                  className="text-gray-400 hover:text-red-500 transition"
                                  onClick={() => removeItem(item.id)}
                                >
                                  <FaTimes />
                                </button>
                              </div>
                              <div className="mt-4 flex flex-wrap items-center justify-between">
                                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                                  <button 
                                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  >
                                    <FaMinus className="text-xs" />
                                  </button>
                                  <span className="px-4 py-1">{item.quantity}</span>
                                  <button 
                                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition"
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  >
                                    <FaPlus className="text-xs" />
                                  </button>
                                </div>
                                <div className="text-right">
                                  {item.originalPrice && (
                                    <p className="text-gray-500 line-through text-sm">${item.originalPrice.toFixed(2)}</p>
                                  )}
                                  <p className="font-bold text-blue-600 text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Coupon Code */}
                    <div className="mt-8">
                      <div className="flex flex-col sm:flex-row gap-2">
                        <input 
                          type="text" 
                          placeholder="Enter coupon code" 
                          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                        />
                        <button 
                          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition whitespace-nowrap"
                          onClick={applyCoupon}
                        >
                          Apply Coupon
                        </button>
                      </div>
                    </div>

                    {/* Demo empty cart button */}
                    <button
                      className="mt-4 w-full bg-red-100 hover:bg-red-200 text-red-600 font-bold py-2 px-4 rounded-lg transition"
                      onClick={emptyCart}
                    >
                      Empty Cart (Demo)
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Order Summary Section */}
          <div className="md:w-1/3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-8">
              <div className="bg-blue-600 text-white px-6 py-4">
                <h2 className="text-xl font-bold flex items-center">
                  <FaReceipt className="mr-2" /> Order Summary
                </h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Discount</span>
                    <span className="font-medium text-green-500">-${discount.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex justify-between">
                    <span className="font-bold text-lg">Total</span>
                    <span className="font-bold text-blue-600 text-lg">${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <button 
                  className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition flex items-center justify-center"
                  disabled={cartItems.length === 0}
                >
                  <FaLock className="mr-2" /> Proceed to Checkout
                </button>
                
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500">or</p>
                  <button className="mt-2 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-lg transition flex items-center justify-center">
                    <FaArrowLeft className="mr-2" /> Continue Shopping
                  </button>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-bold text-gray-700 mb-3">We Accept</h4>
                  <div className="flex space-x-4">
                    <div className="bg-gray-100 p-2 rounded-lg">
                      <FaCcVisa className="text-2xl text-blue-800" />
                    </div>
                    <div className="bg-gray-100 p-2 rounded-lg">
                      <FaCcMastercard className="text-2xl text-red-600" />
                    </div>
                    <div className="bg-gray-100 p-2 rounded-lg">
                      <FaCcAmex className="text-2xl text-blue-600" />
                    </div>
                    <div className="bg-gray-100 p-2 rounded-lg">
                      <FaCcPaypal className="text-2xl text-blue-700" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      
    </div>
  );
};

export default ShoppingCart;