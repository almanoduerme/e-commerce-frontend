import { CartItem } from "./cart-item.interface";
import { Product } from "./product.interface";

export interface CartContextType {
  cart: CartItem[];
  addItem: (item: Product, quantity: number) => void;
  removeItem: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  getTotalQuantity: () => number | undefined;
  clearCart: () => void;
}
