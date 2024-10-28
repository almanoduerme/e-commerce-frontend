import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden mt-20">
      <div className="absolute inset-0">
        <img
          src="./hero-image.avif"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
      <div className="relative container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Premium Audio Experience
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Explore our collection of high-quality audio equipment and accessories
          </p>
          <NavLink to={'/products'}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-medium flex items-center gap-2 hover:bg-emerald-600 transition-colors"
            >
              Shop Now <ArrowRight className="w-5 h-5" />
            </motion.button>
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
}