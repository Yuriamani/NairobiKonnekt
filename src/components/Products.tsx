import CategoryScroll from './CategoryScroll';
import ProductCard from './ProductCard';

const products = [
  {
    title: "Nike Running Shoes",
    price: "KSh 4,500",
    rating: 4.5,
    reviews: 24,
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Smart Watch Series 5",
    price: "KSh 12,000",
    rating: 4,
    reviews: 18,
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Wireless Headphones",
    price: "KSh 3,200",
    rating: 5,
    reviews: 32,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Smartphone X Pro",
    price: "KSh 32,000",
    rating: 4.5,
    reviews: 45,
    imageUrl: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Cotton T-Shirt",
    price: "KSh 800",
    rating: 4,
    reviews: 12,
    imageUrl: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Vintage Camera",
    price: "KSh 7,500",
    rating: 3.5,
    reviews: 8,
    imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Luxury Perfume",
    price: "KSh 2,800",
    rating: 5,
    reviews: 27,
    imageUrl: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Organic Vegetables",
    price: "KSh 350",
    rating: 4,
    reviews: 15,
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80"
  }
];


const Products = () => {
  return (
    <>
        <main className="pt-20 pb-10 pl-16 md:pl-20 pr-4 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryScroll />
          
          {/* Products Grid */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Popular Products</h2>
              <a href="#" className="text-green-600 hover:text-green-700 font-medium">See all</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <ProductCard
                  key={index}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  reviews={product.reviews}
                  imageUrl={product.imageUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Products