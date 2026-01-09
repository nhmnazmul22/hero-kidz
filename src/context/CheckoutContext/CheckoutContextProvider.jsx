"use client";
import React, { useState } from "react";
import CheckoutContext from "./CheckoutContext";

const CheckoutContextProvider = ({ children }) => {
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleValueChange = (key, value) => {
    setCustomerInfo((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const orderInfo = {
    customerInfo,
    handleValueChange,
  };

  return (
    <CheckoutContext.Provider value={orderInfo}>
      {children}
    </CheckoutContext.Provider>
  );
};

export default CheckoutContextProvider;
