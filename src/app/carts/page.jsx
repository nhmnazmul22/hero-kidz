import { getCarts } from "@/actions/server/cart";

import React from "react";
import CartClientPage from "./CartPage";

const CartPage = async () => {
  const result = await getCarts();

  const cartItems = result.data || [];
  return (
    <div className="main-container py-10">
      <CartClientPage initialItems={cartItems} />
    </div>
  );
};

export default CartPage;
