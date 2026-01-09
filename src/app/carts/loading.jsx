import React from "react";

const CartPageLoading = () => {
  return (
    <div className="main-container mx-auto px-4 py-10 animate-pulse">
      <div className="mb-10 space-y-2">
        <div className="h-8 w-52 skeleton rounded"></div>
        <div className="h-4 w-80 skeleton rounded"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart List Skeleton */}
        <div className="lg:col-span-2 space-y-5">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="card bg-base-100 shadow-sm border border-base-200"
            >
              <div className="flex gap-4 p-4">
                {/* Image */}
                <div className="w-28 h-28 skeleton rounded-xl"></div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div className="h-5 w-3/4 skeleton rounded"></div>
                  <div className="h-4 w-1/3 skeleton rounded"></div>

                  <div className="flex justify-between items-center pt-3">
                    <div className="h-6 w-20 skeleton rounded-full"></div>
                    <div className="h-6 w-24 skeleton rounded"></div>
                  </div>
                </div>

                {/* Remove button */}
                <div className="h-6 w-6 skeleton rounded"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Skeleton */}
        <div className="card bg-base-100 shadow-md border border-base-200 h-fit">
          <div className="card-body space-y-4">
            <div className="h-6 w-32 skeleton rounded"></div>

            <div className="flex justify-between">
              <div className="h-4 w-20 skeleton rounded"></div>
              <div className="h-4 w-16 skeleton rounded"></div>
            </div>

            <div className="flex justify-between">
              <div className="h-4 w-28 skeleton rounded"></div>
              <div className="h-4 w-16 skeleton rounded"></div>
            </div>

            <div className="divider"></div>

            <div className="flex justify-between">
              <div className="h-5 w-20 skeleton rounded"></div>
              <div className="h-5 w-24 skeleton rounded"></div>
            </div>

            <div className="h-11 w-full skeleton rounded-btn"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPageLoading;
