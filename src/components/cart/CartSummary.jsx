"use client";

import useCart from "@/hooks/useCart";

const CartSummary = () => {
  const { cartItems } = useCart();

  const subtotal = cartItems?.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <div className="card bg-base-100 shadow-md border border-base-200 h-fit sticky top-0">
      <div className="card-body">
        <h2 className="card-title mb-4">অর্ডার সামারি</h2>

        <div className="flex justify-between text-sm">
          <span>মোট</span>
          <span>৳{subtotal}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>টেক্স চার্জ</span>
          <span className="text-success">ফ্রি</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>ডেলিভারি চার্জ</span>
          <span className="text-success">ফ্রি</span>
        </div>

        <div className="divider my-3"></div>

        <div className="flex justify-between font-bold text-lg">
          <span>র্সবমোট</span>
          <span className="text-primary">৳{subtotal}</span>
        </div>

        <button className="btn btn-primary w-full mt-4">Checkout</button>
      </div>
    </div>
  );
};

export default CartSummary;
