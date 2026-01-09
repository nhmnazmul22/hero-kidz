import CartHeader from "@/components/cart/CartHeader";
import CartList from "@/components/cart/CartList";
import CartSummary from "@/components/cart/CartSummary";
import CartContextProvider from "@/context/CartContext/CartContextProvider";

const CartClientPage = ({ initialItems }) => {
  return (
    <CartContextProvider initialItems={initialItems}>
      <CartHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
        <CartList />
        <CartSummary />
      </div>
    </CartContextProvider>
  );
};

export default CartClientPage;
