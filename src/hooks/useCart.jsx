"use client";

import CartContext from "@/context/CartContext/CartContext";
import { useContext } from "react";

const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartContextProvider");
  }

  return context;
};

export default useCart;
