import Image from "next/image";
import React from "react";

const CheckoutItem = ({ item }) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="bg-base-200 p-2 rounded-lg w-20 h-20">
        <Image
          src={item.image || "#"}
          alt={item.bnTitle}
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      <div className="flex-1">
        <p className="font-medium">{item.bnTitle}</p>
        <p className="text-sm text-neutral">পরিমাণ: {item.quantity}</p>
      </div>

      <p className="font-semibold">৳{item.totalPrice}</p>
    </div>
  );
};

export default CheckoutItem;
