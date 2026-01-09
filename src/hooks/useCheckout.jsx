"use client";

import CheckoutContext from "@/context/CheckoutContext/CheckoutContext";
import { useContext } from "react";

const useCheckout = () => {
  const context = useContext(CheckoutContext);

  if (!context) {
    throw new Error(
      "useCheckout must be used within a CheckoutContextProvider"
    );
  }

  return context;
};

export default useCheckout;
