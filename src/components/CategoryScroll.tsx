const CategoryScroll = () => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Categories</h2>
      </div>
      <div className="category-scroll overflow-x-auto whitespace-nowrap pb-2">
        <div className="inline-flex space-x-3">
          <button className="px-4 py-2 bg-green-600 text-white rounded-full font-medium">All</button>
          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full font-medium">Electronics</button>
          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full font-medium">Fashion</button>
          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full font-medium">Home & Garden</button>
          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full font-medium">Beauty</button>
          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full font-medium">Sports</button>
          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full font-medium">Automotive</button>
          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full font-medium">Toys</button>
          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full font-medium">Groceries</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryScroll