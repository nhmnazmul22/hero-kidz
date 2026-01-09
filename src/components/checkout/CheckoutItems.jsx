"use client";
import useCart from "@/hooks/useCart";
import CheckoutItem from "./CheckoutItem";

const CheckoutItems = () => {
  const { cartItems } = useCart();

  return (
    <div className="card bg-base-100 border border-base-200">
      <div className="card-body">
        <h2 className="font-semibold text-lg mb-4">আপনার পণ্য</h2>

        {cartItems?.map((item) => (
          <CheckoutItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CheckoutItems;
