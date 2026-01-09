import React from "react";
import CartItem from "./CartItem";

const CartList = ({ items }) => {
  return (
    <div className="lg:col-span-2 space-y-5">
      {items.map((item) => (
        <CartItem key={item._id} item={item} />
      ))}
    </div>
  );
};

export default CartList;
