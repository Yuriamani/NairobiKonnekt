interface QuickRideOptionsProps {
  className?: string;
  mobile?: boolean;
}

const QuickRideOptions = ({ className = '', mobile = false }: QuickRideOptionsProps) => {
  if (mobile) {
    return (
      <div className={`bg-white rounded-lg shadow p-4 ${className}`}>
        <h3 className="text-lg font-semibold mb-3 text-indigo-700">Quick Ride</h3>
        <div className="grid grid-cols-3 gap-2">
          <button className="bg-indigo-600 text-white py-2 px-2 rounded-md hover:bg-indigo-700 transition flex flex-col items-center justify-center text-sm">
            <i className="fas fa-bus mb-1"></i>
            <span>Matatu</span>
          </button>
          <button className="bg-blue-600 text-white py-2 px-2 rounded-md hover:bg-blue-700 transition flex flex-col items-center justify-center text-sm">
            <i className="fas fa-taxi mb-1"></i>
            <span>Taxi</span>
          </button>
          <button className="bg-green-600 text-white py-2 px-2 rounded-md hover:bg-green-700 transition flex flex-col items-center justify-center text-sm">
            <i className="fas fa-motorcycle mb-1"></i>
            <span>Boda Boda</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-lg shadow p-4 ${className}`}>
      <h3 className="text-lg font-semibold mb-4 text-indigo-700">Quick Ride</h3>
      <div className="space-y-3">
        <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition flex items-center justify-between">
          <span>Matatu</span>
          <i className="fas fa-bus"></i>
        </button>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition flex items-center justify-between">
          <span>Taxi</span>
          <i className="fas fa-taxi"></i>
        </button>
        <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition flex items-center justify-between">
          <span>Boda Boda</span>
          <i className="fas fa-motorcycle"></i>
        </button>
      </div>
    </div>
  );
};

export default QuickRideOptions;