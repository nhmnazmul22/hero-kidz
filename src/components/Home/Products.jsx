import React from "react";
import SectionHeader from "../common/SectionHeader";
import { toys } from "@/constants";
import ProductCard from "../product/ProductCard";

const Products = () => {
  return (
    <div>
      <SectionHeader
        title="পন্য সমূহ"
        subTitle="আপনার শিশুর জন্য বাছাইকৃত সেরা খেলনার সংগ্রহ"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {toys.map((toy, index) => (
          <ProductCard key={index} product={toy} />
        ))}
      </div>
    </div>
  );
};

export default Products;
