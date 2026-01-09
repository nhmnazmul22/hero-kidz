import { getCarts } from "@/actions/server/cart";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import CheckoutHeader from "@/components/checkout/CheckoutHeader";
import CheckoutItems from "@/components/checkout/CheckoutItems";
import OrderSummary from "@/components/order/OrderSummary";
import CartContextProvider from "@/context/CartContext/CartContextProvider";
import CheckoutContextProvider from "@/context/CheckoutContext/CheckoutContextProvider";

const CheckoutPage = async () => {
  const result = await getCarts();
  const cartItems = result.data || [];

  return (
    <CartContextProvider initialItems={cartItems}>
      <CheckoutContextProvider>
        <div className="main-container py-10">
          <CheckoutHeader />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {/* Left */}
            <div className="lg:col-span-2 space-y-6">
              <CheckoutForm />
              <CheckoutItems />
            </div>

            {/* Right */}
            <OrderSummary actionText="Confirm Order" actionLink="#" />
          </div>
        </div>
      </CheckoutContextProvider>
    </CartContextProvider>
  );
};

export default CheckoutPage;
