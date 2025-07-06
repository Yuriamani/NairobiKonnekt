import { useState } from 'react';
import { FaSearch, FaTicketAlt, FaMapMarkedAlt, FaStar, FaTimes, FaUserTie, FaCheck } from 'react-icons/fa';
import './takearide.css'
const TakeARide = () => {
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);
  const [showSeatModal, setShowSeatModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('mobile-money');

  const seats = [
    { number: '1', booked: false },
    { number: '2', booked: false },
    { number: '3', booked: false },
    { number: '4', booked: false },
    { number: '5', booked: true },
    { number: '6', booked: false },
    { number: '7', booked: false },
    { number: '8', booked: false },
    { number: '9', booked: false },
    { number: '10', booked: true },
    { number: '11', booked: false },
  ];

  const handleSeatSelect = (seatNumber: string, isBooked: boolean) => {
    if (!isBooked) {
      setSelectedSeat(seatNumber);
    }
  };

  const handleConfirmBooking = () => {
    if (selectedSeat) {
      setShowSeatModal(false);
      setShowConfirmationModal(true);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="p-6">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-6 flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
              <FaSearch className="text-xl" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Search Trips</h3>
              <p className="text-sm text-gray-500">Find buses and matatus</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
              <FaTicketAlt className="text-xl" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">My Bookings</h3>
              <p className="text-sm text-gray-500">View upcoming trips</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
              <FaMapMarkedAlt className="text-xl" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Live Tracking</h3>
              <p className="text-sm text-gray-500">Track your vehicle</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 mr-4">
              <FaStar className="text-xl" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Feedback</h3>
              <p className="text-sm text-gray-500">Rate your experience</p>
            </div>
          </div>
        </div>

        {/* Trip Search Section */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold text-gray-800">Search for Trips</h2>
          </div>
          <div className="p-6">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select location</option>
                    <option>Nairobi</option>
                    <option>Mombasa</option>
                    <option>Kisumu</option>
                    <option>Eldoret</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select location</option>
                    <option>Nairobi</option>
                    <option>Mombasa</option>
                    <option>Kisumu</option>
                    <option>Eldoret</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Any</option>
                    <option>Bus</option>
                    <option>Matatu</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <FaSearch className="inline mr-2" /> Search Trips
              </button>
            </form>
          </div>
        </div>

        {/* Available Trips */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold text-gray-800">Available Trips</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {/* Trip Card 1 */}
              <div className="border rounded-lg overflow-hidden">
                <div className="p-4 bg-blue-50 flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">Nairobi to Mombasa</h3>
                    <p className="text-sm text-gray-600">Easy Coach - KCD 123A</p>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Available</span>
                </div>
                <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Departure</p>
                    <p className="font-medium">08:00 AM</p>
                    <p className="text-sm text-gray-600">15 Oct 2023</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-medium">8 hours</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Price</p>
                    <p className="font-medium text-blue-600">KSh 1,200</p>
                    <button 
                      onClick={() => setShowSeatModal(true)}
                      className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Trip Card 2 */}
              <div className="border rounded-lg overflow-hidden">
                <div className="p-4 bg-blue-50 flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">Nairobi to Kisumu</h3>
                    <p className="text-sm text-gray-600">Mash Poa - KBC 456B</p>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Available</span>
                </div>
                <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Departure</p>
                    <p className="font-medium">10:30 AM</p>
                    <p className="text-sm text-gray-600">15 Oct 2023</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-medium">5.5 hours</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Price</p>
                    <p className="font-medium text-blue-600">KSh 900</p>
                    <button 
                      onClick={() => setShowSeatModal(true)}
                      className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seat Selection Modal */}
        {showSeatModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-screen overflow-y-auto">
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="text-xl font-semibold">Select Your Seat</h3>
                <button 
                  onClick={() => setShowSeatModal(false)}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Vehicle Layout</h4>
                  <div className="flex justify-center">
                    <div className="bg-gray-200 p-4 rounded-md">
                      <div className="grid grid-cols-4 gap-2 mb-4">
                        {/* Driver Seat */}
                        <div className="seat booked">
                          <FaUserTie />
                        </div>
                        {/* Front Seats */}
                        {seats.slice(0, 3).map(seat => (
                          <div 
                            key={seat.number}
                            className={`seat ${seat.booked ? 'booked' : selectedSeat === seat.number ? 'selected' : 'available'}`}
                            onClick={() => handleSeatSelect(seat.number, seat.booked)}
                          >
                            {seat.number}
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-4 gap-2 mb-4">
                        {seats.slice(3, 7).map(seat => (
                          <div 
                            key={seat.number}
                            className={`seat ${seat.booked ? 'booked' : selectedSeat === seat.number ? 'selected' : 'available'}`}
                            onClick={() => handleSeatSelect(seat.number, seat.booked)}
                          >
                            {seat.number}
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-4 gap-2 mb-4">
                        {seats.slice(7).map(seat => (
                          <div 
                            key={seat.number}
                            className={`seat ${seat.booked ? 'booked' : selectedSeat === seat.number ? 'selected' : 'available'}`}
                            onClick={() => handleSeatSelect(seat.number, seat.booked)}
                          >
                            {seat.number}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center mt-4 space-x-4">
                    <div className="flex items-center">
                      <div className="seat available mr-2"></div>
                      <span className="text-sm">Available</span>
                    </div>
                    <div className="flex items-center">
                      <div className="seat booked mr-2"></div>
                      <span className="text-sm">Booked</span>
                    </div>
                    <div className="flex items-center">
                      <div className="seat selected mr-2"></div>
                      <span className="text-sm">Selected</span>
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Passenger Name</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    defaultValue="John Passenger" 
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        name="payment" 
                        checked={paymentMethod === 'mobile-money'}
                        onChange={() => setPaymentMethod('mobile-money')}
                        className="text-blue-500 focus:ring-blue-500" 
                      />
                      <span>Mobile Money (M-Pesa)</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        name="payment" 
                        checked={paymentMethod === 'credit-card'}
                        onChange={() => setPaymentMethod('credit-card')}
                        className="text-blue-500 focus:ring-blue-500" 
                      />
                      <span>Credit Card</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        name="payment" 
                        checked={paymentMethod === 'cash'}
                        onChange={() => setPaymentMethod('cash')}
                        className="text-blue-500 focus:ring-blue-500" 
                      />
                      <span>Cash on Board</span>
                    </label>
                  </div>
                </div>
                <div className="flex justify-end space-x-4">
                  <button 
                    onClick={() => setShowSeatModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleConfirmBooking}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Confirm Booking (KSh 1,200)
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Booking Confirmation Modal */}
        {showConfirmationModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="text-xl font-semibold">Booking Confirmed!</h3>
                <button 
                  onClick={() => setShowConfirmationModal(false)}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="mx-auto w-16 h-16 flex items-center justify-center bg-green-100 text-green-600 rounded-full mb-4">
                    <FaCheck className="text-2xl" />
                  </div>
                  <h4 className="font-medium text-lg mb-1">Your booking is confirmed</h4>
                  <p className="text-gray-600">You will receive confirmation details via email and SMS</p>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Booking Reference:</span>
                    <span className="font-medium">BKG-20231015-001</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Trip:</span>
                    <span className="font-medium">Nairobi to Mombasa</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Departure:</span>
                    <span className="font-medium">15 Oct 2023, 08:00 AM</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Seat:</span>
                    <span className="font-medium">{selectedSeat}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount Paid:</span>
                    <span className="font-medium text-green-600">KSh 1,200</span>
                  </div>
                </div>
                <div className="mt-6 flex justify-center">
                  <button 
                    onClick={() => {
                      alert('E-Ticket will be displayed here or downloaded.');
                      setShowConfirmationModal(false);
                    }}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    View E-Ticket
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Recent Bookings */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b">
            <h2 className="text-xl font-semibold text-gray-800">Recent Bookings</h2>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trip</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seat</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium">Nairobi to Nakuru</div>
                      <div className="text-sm text-gray-500">Easy Coach - KCD 789C</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">12 Oct 2023, 07:30 AM</td>
                    <td className="px-6 py-4 whitespace-nowrap">12</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-800">Completed</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button className="text-blue-600 hover:text-blue-800 mr-3">Details</button>
                      <button className="text-green-600 hover:text-green-800">Rate</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium">Nairobi to Eldoret</div>
                      <div className="text-sm text-gray-500">Kingdom Coaches - KBC 234D</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">14 Oct 2023, 09:15 AM</td>
                    <td className="px-6 py-4 whitespace-nowrap">7</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-800">Upcoming</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button className="text-blue-600 hover:text-blue-800 mr-3">Details</button>
                      <button className="text-red-600 hover:text-red-800">Cancel</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium">Nairobi to Kisumu</div>
                      <div className="text-sm text-gray-500">Mash Poa - KBC 456B</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">16 Oct 2023, 06:00 AM</td>
                    <td className="px-6 py-4 whitespace-nowrap">14</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs rounded bg-orange-100 text-orange-800">Pending Payment</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button className="text-blue-600 hover:text-blue-800 mr-3">Details</button>
                      <button className="text-purple-600 hover:text-purple-800">Pay</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* <style jsx>{`
        .seat {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 5px;
          cursor: pointer;
          border-radius: 4px;
        }
        .seat.selected {
          background-color: #3b82f6;
          color: white;
        }
        .seat.booked {
          background-color: #ef4444;
          color: white;
          cursor: not-allowed;
        }
        .seat.available {
          background-color: #e5e7eb;
        }
      `}</style> */}
    </div>
  );
};

export default TakeARide;