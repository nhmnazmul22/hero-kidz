import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";
import RemoveCartBtn from "../Buttons/RemoveCartBtn";

const CartItem = ({ item }) => {

  return (
    <div className="card bg-base-100 shadow-sm border border-base-200">
      <div className="flex gap-4 p-4">
        <div className="bg-base-200 rounded-xl p-2 w-28 h-28 flex items-center justify-center">
          <Image
            src={item.image}
            alt={item.bnTitle}
            width={120}
            height={120}
            className="object-contain"
          />
        </div>

        <div className="flex-1">
          <h2 className="font-semibold leading-snug">{item.bnTitle}</h2>
          <p className="text-sm text-neutral mt-1">প্রতি পিস: ৳{item.price}</p>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <button
                className="btn btn-xs btn-ghost"
                disabled={item.quantity <= 1}
              >
                <FaMinus />
              </button>

              <span className="px-3 py-1 border border-neutral-600 rounded-md text-sm font-medium">
                {item.quantity}
              </span>

              <button className="btn btn-xs btn-ghost">
                <FaPlus />
              </button>
            </div>

            <span className="font-bold text-primary">৳{item.totalPrice}</span>
          </div>
        </div>

        <RemoveCartBtn itemId={item._id.toString()} />
      </div>
    </div>
  );
};

export default CartItem;
