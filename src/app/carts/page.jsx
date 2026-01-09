import { getCarts } from "@/actions/server/cart";
import CartHeader from "@/components/cart/CartHeader";
import CartList from "@/components/cart/CartList";
import OrderSummary from "@/components/order/OrderSummary";
import CartContextProvider from "@/context/CartContext/CartContextProvider";

import React from "react";

const CartPage = async () => {
  const result = await getCarts();

  const cartItems = result.data || [];
  return (
    <CartContextProvider initialItems={cartItems}>
      <div className="main-container py-10">
        <CartHeader />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          <CartList />
          <OrderSummary actionText="Checkout" actionLink="/checkout" />
        </div>
      </div>
    </CartContextProvider>
  );
};

export default CartPage;
