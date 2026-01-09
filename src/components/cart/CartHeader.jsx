"use client";

import useCart from "@/hooks/useCart";

const CartHeader = () => {
  const { cartItems = [] } = useCart();

  return (
    <div className="mb-10">
      <h1 className="text-3xl font-bold">
        আপনার শপিং কার্ট {`(${cartItems?.length} পন্য)`}
      </h1>
      <p className="text-sm text-neutral mt-1">
        কেনাকাটার আগে আপনার পণ্যগুলো একবার দেখে নিন
      </p>
    </div>
  );
};

export default CartHeader;
