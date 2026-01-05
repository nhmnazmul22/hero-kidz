import React from "react";
import SectionHeader from "../common/SectionHeader";
import ProductCard from "../product/ProductCard";
import { getProducts } from "@/actions/server/product";
import ProductCardSkeleton from "../skeleton/ProductCardSkeleton";

const Products = async () => {
  const response = await getProducts();

  return (
    <div className="pb-10">
      <SectionHeader
        title="পন্য সমূহ"
        subTitle="আপনার শিশুর জন্য বাছাইকৃত সেরা খেলনার সংগ্রহ"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {response.success && response.data.length > 0
          ? response.data.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          : Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
      </div>
    </div>
  );
};

export default Products;
