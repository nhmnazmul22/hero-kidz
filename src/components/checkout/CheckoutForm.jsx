"use client";

import useCheckout from "@/hooks/useCheckout";

const CheckoutForm = () => {
  const { customerInfo, handleValueChange } = useCheckout();

  return (
    <div className="card bg-base-100 border border-base-200">
      <div className="card-body">
        <h2 className="font-semibold text-lg">ডেলিভারি তথ্য</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="নাম"
            value={customerInfo?.name || ""}
            onChange={(e) => handleValueChange("name", e.target.value)}
          />
          <input
            type="email"
            className="input input-bordered w-full"
            placeholder="ইমেইল"
            value={customerInfo?.email || ""}
            onChange={(e) => handleValueChange("email", e.target.value)}
          />
          <input
            type="text"
            className="input input-bordered w-full md:col-span-2"
            placeholder="মোবাইল নম্বর"
            value={customerInfo?.phone || ""}
            onChange={(e) => handleValueChange("phone", e.target.value)}
          />
          <textarea
            className="textarea w-full md:col-span-2"
            placeholder="সম্পূর্ণ ঠিকানা"
            value={customerInfo?.address || ""}
            onChange={(e) => handleValueChange("address", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
