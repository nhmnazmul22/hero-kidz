"use client";
import useCart from "@/hooks/useCart";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartQuantityBtn = ({ item }) => {
  const { increaseQty, decreaseQty } = useCart();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => decreaseQty(item._id)}
        className="btn btn-xs btn-ghost"
        disabled={item.quantity <= 1}
      >
        <FaMinus />
      </button>

      <span className="px-3 py-1 border border-neutral-600 rounded-md text-sm font-medium">
        {item.quantity}
      </span>

      <button
        onClick={() => increaseQty(item._id)}
        className="btn btn-xs btn-ghost"
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default CartQuantityBtn;
