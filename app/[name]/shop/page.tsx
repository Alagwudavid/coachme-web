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
    <section className="py-8 px-4 md:px-8 lg:px-12 w-full bg-muted min-h-screen">
      <div className="space-y-6 max-w-7xl mx-auto">
        {allProducts.length > 0 ? (
          <div className="space-y-8">
            {Object.entries(productsByCategory).map(
              ([category, categoryProducts]) => (
                <div key={category}>
                  <div className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                    {category}
                    <span className="text-base font-normal text-muted-foreground">
                      ({categoryProducts.length})
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categoryProducts.map((product) => (
                      <div
                        key={product.id}
                        onClick={() =>
                          router.push(`/${coachSlug}/product/${product.slug}`)
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
            <div className="mb-4 text-center w-full flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-20 text-muted-foreground" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M20.605 5.988a2.8 2.8 0 0 0-2.6-2.59l-4.56-.32a2.84 2.84 0 0 0-2.17.81L3.9 11.278a2.794 2.794 0 0 0 0 3.95l4.87 4.88a2.8 2.8 0 0 0 3.96 0l7.38-7.39a2.78 2.78 0 0 0 .81-2.17ZM12.015 19.4a1.8 1.8 0 0 1-2.54 0l-4.87-4.87a1.793 1.793 0 0 1 0-2.55l1.17-1.17l7.42 7.42Zm7.38-7.38l-5.5 5.5l-7.41-7.42l5.5-5.5a1.8 1.8 0 0 1 1.27-.53c.04 0 .08.01.12.01l4.56.32a1.8 1.8 0 0 1 1.67 1.66l.32 4.56a1.83 1.83 0 0 1-.525 1.398Z"></path><circle cx={17} cy={6.999} r={0.862} fill="currentColor"></circle></svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No Products Available
            </h3>
            <p className="text-muted-foreground">
              {coach?.name || "This coach"} hasn't listed any products yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ShopPage;
