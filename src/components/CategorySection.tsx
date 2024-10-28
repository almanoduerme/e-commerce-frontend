import { motion } from 'framer-motion';
import { Headphones, Speaker, Mic, Radio } from 'lucide-react';

const categories = [
  {
    icon: Headphones,
    name: 'Headphones',
    description: 'Premium wireless & wired headphones',
  },
  {
    icon: Speaker,
    name: 'Speakers',
    description: 'Bluetooth & smart home speakers',
  },
  {
    icon: Mic,
    name: 'Microphones',
    description: 'Professional recording equipment',
  },
  {
    icon: Radio,
    name: 'Accessories',
    description: 'Cables, cases & more',
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <category.icon className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
              <p className="text-gray-600">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}