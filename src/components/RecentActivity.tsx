interface RecentActivityProps {
  className?: string;
  mobile?: boolean;
}

const RecentActivity = ({ className = '', mobile = false }: RecentActivityProps) => {
  if (mobile) {
    return (
      <div className={`bg-white rounded-lg shadow p-4 ${className}`}>
        <h3 className="text-lg font-semibold mb-3 text-indigo-700">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
              <i className="fas fa-store text-indigo-600 text-sm"></i>
            </div>
            <div>
              <p className="text-sm"><span className="font-medium">Kiondo Creations</span> added new products</p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
              <i className="fas fa-car text-blue-600 text-sm"></i>
            </div>
            <div>
              <p className="text-sm"><span className="font-medium">SafeRide Matatus</span> updated routes</p>
              <p className="text-xs text-gray-500">5 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-lg shadow p-4 ${className}`}>
      <h3 className="text-lg font-semibold mb-4 text-indigo-700">Recent Activity</h3>
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
            <i className="fas fa-store text-indigo-600"></i>
          </div>
          <div>
            <p className="text-sm"><span className="font-medium">Kiondo Creations</span> added new products to their store</p>
            <p className="text-xs text-gray-500">2 hours ago</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
            <i className="fas fa-car text-blue-600"></i>
          </div>
          <div>
            <p className="text-sm"><span className="font-medium">SafeRide Matatus</span> has updated their routes in Westlands area</p>
            <p className="text-xs text-gray-500">5 hours ago</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
            <i className="fas fa-utensils text-green-600"></i>
          </div>
          <div>
            <p className="text-sm"><span className="font-medium">Mama Njeri's Kitchen</span> is offering 20% discount on all meals today</p>
            <p className="text-xs text-gray-500">1 day ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;