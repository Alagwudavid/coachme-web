"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getCoachBySlug, getCoachProducts } from "@/app/data/utils";
import { products } from "@/app/data/products";
import Image from "next/image";
import {
  Star,
  Download,
  FileText,
  Video,
  Book,
  Package,
  Ticket,
  Calendar,
} from "lucide-react";

// Product type icons
const productTypeIcons = {
  ebook: <FileText className="w-4 h-4" />,
  video: <Video className="w-4 h-4" />,
  course: <Book className="w-4 h-4" />,
  template: <FileText className="w-4 h-4" />,
  toolkit: <Package className="w-4 h-4" />,
  ticket: <Ticket className="w-4 h-4" />,
  session: <Calendar className="w-4 h-4" />,
};

function ShopPage() {
  const params = useParams();
  const router = useRouter();
  const coachSlug = params.name as string;
  const coach = getCoachBySlug(coachSlug);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Get all products for this coach
  const allProducts = coach?.productIds ? getCoachProducts(coach.id) : [];

  // Get unique categories from products
  const categories = [
    "all",
    ...Array.from(new Set(allProducts.map((p) => p.category))),
  ];

  // Filter products by category
  const filteredProducts =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  // Group products by category for display
  const productsByCategory = categories.reduce(
    (acc, category) => {
      if (category === "all") return acc;
      const categoryProducts = allProducts.filter(
        (p) => p.category === category,
      );
      if (categoryProducts.length > 0) {
        acc[category] = categoryProducts;
      }
      return acc;
    },
    {} as Record<string, typeof allProducts>,
  );

  return (
    <div className="space-y-6">
      {allProducts.length > 0 ? (
        <div className="space-y-8">
          {Object.entries(productsByCategory).map(
            ([category, categoryProducts]) => (
              <div key={category}>
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  {category}
                  <span className="text-base font-normal text-muted-foreground">
                    ({categoryProducts.length})
                  </span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {categoryProducts.map((product) => (
                    <div
                      key={product.id}
                      onClick={() =>
                        router.push(
                          `/coachme/${coachSlug}/product/${product.slug}`,
                        )
                      }
                      className="bg-card overflow-hidden p-2 rounded-2xl hover:shadow-lg transition-all cursor-pointer group space-y-3"
                    >
                      {/* Product Image */}
                      <div className="relative rounded-2xl bg-muted overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-40 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {product.isNew && (
                          <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-green-500 text-white">
                            New
                          </div>
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="space-y-2">
                        {/* Title */}
                        <h4 className="font-semibold text-foreground text-lg line-clamp-2 group-hover:text-primary transition-colors">
                          {product.title}
                        </h4>

                        {/* Price */}
                        <p className="text-base text-muted-foreground line-clamp-2">
                          {product.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🛍️</div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            No Products Available
          </h3>
          <p className="text-muted-foreground">
            {coach?.name || "This coach"} hasn't listed any products yet.
          </p>
        </div>
      )}
    </div>
  );
}

export default ShopPage;
