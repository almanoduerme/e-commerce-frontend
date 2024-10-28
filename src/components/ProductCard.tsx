import { motion } from 'framer-motion';
import { BookUser } from 'lucide-react';
import { Product } from '../interfaces';
import { NavLink } from 'react-router-dom';

export default function ProductCard(product: Product) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden"
    >
      <div className="relative group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Desktop hover overlay */}
        <div className="absolute inset-0 hidden lg:flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300">
        <NavLink to={`/product/${product.id}`}>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hidden group-hover:flex items-center gap-2 shadow-lg"
          >
            <BookUser className="w-4 h-4" />
            View details
          </motion.button>
        </NavLink>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
          <span className="text-lg font-bold text-emerald-600">${product.price}</span>
        </div>
        <p className="text-gray-600 mb-4">{product.description}</p>

        {/* Mobile/Tablet add to cart button */}
        <NavLink to={`/product/${product.id}`}>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="lg:hidden w-full bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 shadow-md active:bg-emerald-700 transition-colors"
          >
            <BookUser className="w-4 h-4" />
            View details
          </motion.button>
        </NavLink>
      </div>
    </motion.div>
  );
}