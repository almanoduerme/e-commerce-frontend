import React, { useState } from "react";
import { products } from "../data/products";
import CategoryFilter from "./CategoryFilter"; // Import the filter component
import { ProductCard } from "../components" 

const ProductList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("default");

  // Get unique categories from products
  const categories = Array.from(new Set(products.map(product => product.category)));

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  // Sort products based on selected order
  const sortedProducts = () => {
    switch (sortOrder) {
      case "asc":
        return [...filteredProducts].sort((a, b) => a.price - b.price); // Ascending
      case "desc":
        return [...filteredProducts].sort((a, b) => b.price - a.price); // Descending
      default:
        return filteredProducts; // Return default order (original array order)
    }
  };

  return (
    <div className="p-4 container mx-auto mt-24">
      <h2 className="text-2xl font-bold mb-4 text-center">Lista de Productos</h2>
      
      <div className="flex items-center justify-center mb-4 md:flex-row flex-col space-y-4 sm:space-y-1 md:space-y-0 space-x-4">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="flex items-center justify-center">
          <h3 className="mr-2 text-lg font-semibold">
            Sort by price:
          </h3>
          <select
            id="sort"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="mt-2 p-2 border rounded"
          >
            <option value="default">Default</option>
            <option value="asc">Lowest to highest</option>
            <option value="desc">Highest to lowest</option>
          </select>
        </div>
      </div>

      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sortedProducts().map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductList;