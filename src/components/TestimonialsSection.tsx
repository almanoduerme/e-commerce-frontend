import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Testimonials } from '../interfaces/testimonials.interface';

const testimonials: Array<Testimonials> = [
  {
    name: "Sarah Johnson",
    role: "Music Producer",
    content: "The sound quality is absolutely incredible. Best purchase I've made this year!",
    rating: 5,
    image: "./sarah.avif"
  },
  {
    name: "Michael Chen",
    role: "Audio Engineer",
    content: "Professional grade equipment at a reasonable price. Highly recommended!",
    rating: 5,
    image: "./michael.avif"
  },
  {
    name: "Emily Davis",
    role: "Podcast Host",
    content: "Perfect for my recording needs. The customer service is exceptional.",
    rating: 5,
    image: "./emily.avif"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}