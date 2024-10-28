import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Music2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <Link to="/" className="flex items-center justify-center gap-2 mb-8">
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 text-transparent bg-clip-text">
              Modern Store
            </span>
            <Music2 className="w-6 h-6 text-emerald-500" />
          </Link>
          
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">{title}</h2>
          <p className="text-gray-600 text-center mb-8">{subtitle}</p>
          
          {children}
        </div>
      </motion.div>
    </div>
  );
}