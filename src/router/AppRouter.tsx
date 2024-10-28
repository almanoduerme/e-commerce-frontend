import { Route, Routes, BrowserRouter } from "react-router-dom";
import { CartProvider } from "../context/CartContext";
import { ToastContainer } from "react-toastify";
import { toastOptions } from "../utils/toast.config";
import { CartPage, ForgotPasswordPage, HomePage, LoginPage, NotFoundPage, ProductsPage, RegisterPage } from "../pages";
import { Header, ProductDetail } from "../components"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <ToastContainer {...toastOptions} />
      </CartProvider>
    </BrowserRouter>
  );
};

export { AppRouter };
