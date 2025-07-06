interface FeaturedBusinessesProps {
  className?: string;
  mobile?: boolean;
}

const FeaturedBusinesses = ({ className = '', mobile = false }: FeaturedBusinessesProps) => {
  return (
    <div className={`bg-white rounded-lg shadow p-4 ${className}`}>
      <h3 className="text-lg font-semibold mb-4 text-indigo-700">Featured Businesses</h3>
      <div className={mobile ? "space-y-4" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
        <div className="border rounded-lg p-3 hover:shadow-md transition-shadow">
          <div className="h-32 bg-indigo-100 rounded-md mb-3 flex items-center justify-center">
            <i className="fas fa-utensils text-4xl text-indigo-600"></i>
          </div>
          <h4 className="font-medium">Mama Njeri's Kitchen</h4>
          <p className="text-sm text-gray-600 mb-2">Authentic Kenyan dishes</p>
          <div className="flex items-center text-yellow-400 text-sm">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <span className="text-gray-600 ml-1">(24)</span>
          </div>
        </div>
        <div className="border rounded-lg p-3 hover:shadow-md transition-shadow">
          <div className="h-32 bg-blue-100 rounded-md mb-3 flex items-center justify-center">
            <i className="fas fa-tshirt text-4xl text-blue-600"></i>
          </div>
          <h4 className="font-medium">Kiondo Creations</h4>
          <p className="text-sm text-gray-600 mb-2">Handmade African baskets</p>
          <div className="flex items-center text-yellow-400 text-sm">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="far fa-star"></i>
            <span className="text-gray-600 ml-1">(18)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBusinesses;