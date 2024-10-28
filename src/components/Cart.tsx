import { motion } from 'framer-motion';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../hooks/useCart';

export default function CartSection() {
  const { cart, addItem, removeItem, clearCart, updateQuantity } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-20 text-center"
      >
        <p className="text-gray-500 text-lg mt-24">Your cart is empty</p>
      </motion.div>
    );
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          {/* Desktop View */}
          <div className="hidden md:block overflow-x-auto mt-16">
            <table className="w-full table-fixed border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="w-[40%] px-6 py-4 text-left text-sm font-semibold text-gray-900">Product</th>
                  <th className="w-[15%] px-6 py-4 text-left text-sm font-semibold text-gray-900">Price</th>
                  <th className="w-[20%] px-6 py-4 text-left text-sm font-semibold text-gray-900">Quantity</th>
                  <th className="w-[15%] px-6 py-4 text-left text-sm font-semibold text-gray-900">Total</th>
                  <th className="w-[10%] px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <motion.tr
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <span className="font-medium text-gray-900">{item.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-900">${item.price.toFixed(2)}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-full hover:bg-gray-100"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-4 h-4 text-gray-600" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => addItem(item, 1)}
                          className="p-1 rounded-full hover:bg-gray-100"
                        >
                          <Plus className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-red-600 hover:text-red-800 rounded-full hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-50">
                <tr>
                  <td colSpan={3} className="px-6 py-4 text-right font-semibold text-gray-900">
                    Total:
                  </td>
                  <td className="px-6 py-4 font-bold text-gray-900">${total.toFixed(2)}</td>
                  <td>
                    <button
                      onClick={clearCart}
                      className="bg-red-600 text-white rounded-md px-4 py-2 hover:bg-red-700 transition duration-300"
                    >
                      Clear Cart
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Mobile View */}
          <div className="md:hidden mt-16">
            {cart.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-4 border-b border-gray-200 last:border-b-0"
              >
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 truncate mb-1">{item.name}</h3>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600">${item.price.toFixed(2)}</span>
                      <span className="text-gray-900 font-medium">
                        Total: ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-4 h-4 text-gray-600" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => addItem(item, 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200"
                        >
                          <Plus className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-red-600 hover:text-red-800 rounded-full hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="p-4 bg-gray-50">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-900">Total:</span>
                <span className="font-bold text-gray-900">${total.toFixed(2)}</span>
              </div>
              <button
                onClick={clearCart}
                className="mt-2 bg-red-600 text-white rounded-md px-4 py-2 hover:bg-red-700 transition duration-300"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
