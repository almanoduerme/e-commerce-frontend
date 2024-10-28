import { motion } from 'framer-motion';
import { Timer } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function SpecialOffersSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <div className="relative">
            <img
              src="./hero-image.avif"
              alt="Special offer product"
              className="rounded-2xl shadow-2xl"
            />
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-red-500 rounded-full flex items-center justify-center text-white font-bold"
            >
              <div className="text-center">
                <div className="text-2xl">40%</div>
                <div className="text-sm">OFF</div>
              </div>
            </motion.div>
          </div>

          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">Special Offer</h2>
            <div className="flex items-center gap-2 text-emerald-400 mb-4">
              <Timer className="w-6 h-6" />
              <span className="font-semibold">Limited Time Offer</span>
            </div>
            <p className="text-gray-300 text-lg mb-8">
              Get our premium wireless headphones at an unbeatable price. 
              Experience crystal-clear sound quality and ultimate comfort.
            </p>
            <NavLink to={'/product/8'}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-emerald-600 transition-colors"
              >
                Shop Now
              </motion.button>
            </NavLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}