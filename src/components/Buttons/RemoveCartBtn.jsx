"use client";

import useCart from "@/hooks/useCart";
import { BiLoader } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";

const RemoveCartBtn = ({ itemId }) => {
  const { handleRemoveCart, isRemoving } = useCart();

  return (
    <button
      onClick={() => handleRemoveCart(itemId)}
      className="btn btn-ghost btn-sm text-error self-start"
    >
      {isRemoving ? <BiLoader /> : <FaTrash />}
    </button>
  );
};

export default RemoveCartBtn;
