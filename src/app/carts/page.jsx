import CartHeader from "@/components/cart/CartHeader";
import CartList from "@/components/cart/CartList";
import CartSummary from "@/components/cart/CartSummary";
import React from "react";

const CartPage = () => {
  const cartItems = [
    {
      _id: "696083d9548bb3f99baa9a22",
      bnTitle: "সংখ্যা ও গণনা শেখার শিক্ষামূলক বোর্ড",
      image: "https://i.ibb.co.com/p6Q0fchX/81a72-DDFc-KL-AC-SL1500.jpg",
      quantity: 2,
      price: 1125,
      totalPrice: 2250,
    },
  ];

  return (
    <div className="main-container py-10">
      <CartHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <CartList items={cartItems} />
        <CartSummary items={cartItems} />
      </div>
    </div>
  );
};

export default CartPage;
