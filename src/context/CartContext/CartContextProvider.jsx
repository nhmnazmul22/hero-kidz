"use client";

import React, { useState } from "react";
import CartContext from "./CartContext";
import toast from "react-hot-toast";
import { removeCart } from "@/actions/server/cart";

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

  const cartInfo = { cartItems, setCartItems, isRemoving, handleRemoveCart };
  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartContextProvider;
