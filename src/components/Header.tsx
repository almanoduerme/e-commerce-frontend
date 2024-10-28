import { motion, useAnimation } from 'framer-motion';
import { ShoppingCart, Music2, UserCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { useEffect } from 'react';
import { useCart } from '../hooks/useCart';

const Header = () => {
  const { cart } = useCart();
  const { isScrolled } = useScrollDirection();
  const controls = useAnimation();

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    controls.start({
      backgroundColor: isScrolled ? 'rgba(17, 24, 39, 0.95)' : 'rgba(17, 24, 39, 1)',
      backdropFilter: isScrolled ? 'blur(4px)' : 'blur(0px)',
      height: isScrolled ? '64px' : '80px',
      transition: { 
        duration: 0.3,
        ease: 'easeInOut'
      }
    });
  }, [isScrolled, controls]);

  return (
    <motion.header
      initial={{ height: '80px', backgroundColor: 'rgba(17, 24, 39, 1)' }}
      animate={controls}
      className="fixed top-0 left-0 right-0 z-50 shadow-lg"
    >
      <div className="container mx-auto px-4 h-full">
        <div className="h-full flex items-center justify-between">
          <NavLink 
            to="/" 
            className="text-xl md:text-3xl font-bold flex items-center gap-2 md:gap-3 flex-shrink-0"
          >
            <motion.h1 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2 md:gap-3"
            >
              <span className="bg-gradient-to-r from-emerald-400 to-teal-500 text-transparent bg-clip-text truncate max-w-[120px] md:max-w-none">
                Modern Store
              </span>
              <Music2 className="w-5 h-5 md:w-7 md:h-7 text-emerald-400 flex-shrink-0" />
            </motion.h1>
          </NavLink>

          <nav className="flex items-center gap-4 md:gap-8">
            <NavLink 
              to="/products" 
              className={({ isActive }) => 
                `text-gray-300 hover:text-white font-medium transition-colors text-sm md:text-base ${
                  isActive ? 'text-white font-bold' : ''
                }`
              }
            >
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Products
              </motion.div>
            </NavLink>

            <NavLink 
              to="/cart" 
              className={({ isActive }) => 
                `relative text-gray-300 hover:text-white transition-colors ${
                  isActive ? 'text-white font-bold' : ''
                }`
              }
            >
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="p-2"
              >
                <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
                {totalQuantity > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 flex items-center justify-center bg-emerald-500 text-white text-[10px] md:text-xs font-bold rounded-full"
                  >
                    {totalQuantity}
                  </motion.span>
                )}
              </motion.div>
            </NavLink>

            <NavLink 
              to="/login" 
              className={({ isActive }) => 
                `flex items-center gap-2 px-3 py-1.5 rounded-full border-2 
                ${isActive 
                  ? 'border-emerald-500 text-white bg-emerald-500/10' 
                  : 'border-gray-600 text-gray-300 hover:border-emerald-500 hover:text-white'
                } transition-all duration-200`
              }
            >
              <motion.div 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2"
              >
                <UserCircle className="w-5 h-5" />
                <span className="text-sm font-medium hidden md:block">Login</span>
              </motion.div>
            </NavLink>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;