import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-md animate-pulse">
      <div className="h-52 bg-base-200 rounded-t-xl" />
      <div className="p-4 space-y-3">
        <div className="h-5 bg-base-200 rounded w-3/4" />
        <div className="flex justify-between">
          <div className="h-4 bg-base-200 rounded w-16" />
          <div className="h-4 bg-base-200 rounded w-20" />
        </div>
        <div className="h-6 bg-base-200 rounded w-24" />
        <div className="h-9 bg-base-200 rounded w-full mt-4" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
