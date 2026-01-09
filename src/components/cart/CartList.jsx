"use client";

import React from "react";
import CartItem from "./CartItem";
import useCart from "@/hooks/useCart";

const CartList = () => {
  const { cartItems } = useCart();

  if (!cartItems.length) {
    return (
      <div className="col-span-2 text-center py-20">🛒 আপনার কার্ট খালি</div>
    );
  }

  return (
    <div className="lg:col-span-2 space-y-5">
      {cartItems?.map((item) => (
        <CartItem key={item._id} item={item} />
      ))}
    </div>
  );
};

export default CartList;
