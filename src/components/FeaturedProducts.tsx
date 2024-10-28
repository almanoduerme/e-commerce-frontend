import { products } from "../data/products";
import { motion } from 'framer-motion'
import { ProductCard } from "../components";

const FeaturedProductsSection = () => {
  return (
    <section className="py-8 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
        <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our carefully curated collection of modern essentials designed to elevate your lifestyle
        </p>
      </motion.div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProductsSection;