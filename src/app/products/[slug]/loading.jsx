import React from "react";

const ProductDetailLoading = () => {
  return (
    <div className="container mx-auto py-10 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="h-105 bg-base-200 rounded-xl" />

        {/* Info */}
        <div className="space-y-4">
          <div className="h-7 bg-base-200 rounded w-3/4" />
          <div className="h-4 bg-base-200 rounded w-1/2" />

          <div className="h-8 bg-base-200 rounded w-40 mt-4" />

          <div className="flex gap-3 mt-6">
            <div className="h-10 bg-base-200 rounded w-full" />
            <div className="h-10 bg-base-200 rounded w-12" />
          </div>

          <div className="mt-8 space-y-2">
            <div className="h-4 bg-base-200 rounded w-1/2" />
            <div className="h-4 bg-base-200 rounded w-2/3" />
            <div className="h-4 bg-base-200 rounded w-3/4" />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-14 space-y-3">
        <div className="h-6 bg-base-200 rounded w-1/4" />
        <div className="h-4 bg-base-200 rounded w-full" />
        <div className="h-4 bg-base-200 rounded w-full" />
        <div className="h-4 bg-base-200 rounded w-3/4" />
      </div>
    </div>
  );
};

export default ProductDetailLoading;
