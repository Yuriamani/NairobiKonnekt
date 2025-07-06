import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface ProductCardProps {
  title: string;
  price: string;
  rating: number;
  reviews: number;
  imageUrl: string;
}

const ProductCard = ({ title, price, rating, reviews, imageUrl }: ProductCardProps) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    
    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden product-card transition duration-300 ease-in-out">
      <div className="relative pb-48 overflow-hidden">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-gray-900">{title}</h3>
          <span className="text-green-600 font-semibold">{price}</span>
        </div>
        <div className="mt-2 flex items-center">
          <div className="flex">
            {renderStars()}
          </div>
          <span className="text-gray-500 text-sm ml-2">({reviews})</span>
        </div>
        <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard