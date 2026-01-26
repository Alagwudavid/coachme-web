"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { products } from "../../data/products";
import { ProductCard } from "../../components/product-card";
import { coaches } from "../../data/coaches";

export default function ProductsPage() {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<string>("All");

  const productTypes = [
    "All",
    "ebook",
    "video",
    "course",
    "template",
    "toolkit",
  ];

  const filteredProducts =
    selectedType === "All"
      ? products
      : products.filter((p) => p.type === selectedType);

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-foreground mb-8">All Products</h1>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto">
        {productTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
              selectedType === type
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-foreground hover:bg-muted/80"
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-visible">
        {filteredProducts.map((product) => {
          const coach = coaches.find((c) => c.id === product.coachId);
          const coachSlug = coach ? coach.slug : "unknown-coach";
          return (
            <ProductCard
              key={product.id}
              productItem={product}
              onClick={() =>
                router.push(`/${coachSlug}/product/${product.slug}`)
              }
            />
          );
        })}
      </div>

      {/* No Results */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No products found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
