import React from "react";

const CheckoutPageLoading = () => {
  return (
    <div className="main-container py-10 space-y-6">
      <div className="skeleton h-8 w-40" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="skeleton h-40 w-full" />
          <div className="skeleton h-32 w-full" />
        </div>

        <div className="skeleton h-64 w-full" />
      </div>
    </div>
  );
};

export default CheckoutPageLoading;
