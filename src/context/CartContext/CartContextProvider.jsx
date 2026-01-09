"use client";

import React, { useState } from "react";
import CartContext from "./CartContext";
import toast from "react-hot-toast";
import { removeCart, updateCartQuantity } from "@/actions/server/cart";

const CartContextProvider = ({ children, initialItems }) => {
  const [cartItems, setCartItems] = useState(initialItems);
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemoveCart = async (itemId) => {
    setCartItems((prev) =>
      prev.filter((item) => item._id.toString() !== itemId)
    );
    try {
      setIsRemoving(true);
      const response = await removeCart(itemId);
      if (!response.success) {
        toast.error(response.message || "Failed remove cart item");
        return;
      }

      toast.success("Remove cart item successful");
      return;
    } finally {
      setIsRemoving(false);
    }
  };

  const increaseQty = async (id) => {
    const prev = cartItems;

    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.totalPrice + item.price,
            }
          : item
      )
    );
    const result = await updateCartQuantity(id, true);
    if (!result.success) {
      setCartItems(prev);
      toast.error(result.message || "কার্ট আপডেট ব্যর্থ হয়েছে");
    }
  };

  const decreaseQty = async (id) => {
    const prev = cartItems;

    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
              totalPrice: item.totalPrice - item.price,
            }
          : item
      )
    );

    const result = await updateCartQuantity(id, false);
    if (!result.success) {
      setCartItems(prev);
      toast.error(result.message || "কার্ট আপডেট ব্যর্থ হয়েছে");
    }
  };

  const cartInfo = {
    cartItems,
    setCartItems,
    isRemoving,
    handleRemoveCart,
    increaseQty,
    decreaseQty,
  };
  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
