"use client";

import { handleCart } from "@/actions/server/cart";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { BiCart, BiLoader } from "react-icons/bi";

const AddToCardBtn = ({ className, callBackUrl = "", product }) => {
  const session = useSession();
  const router = useRouter();
  const pathName = usePathname();
  const [isAddToCard, setIsAddToCard] = useState(false);

  const handleAddToCart = async (product) => {
    try {
      setIsAddToCard(true);
      if (session.status !== "authenticated") {
        router.push(`/login?callBackUrl=${callBackUrl || pathName}`);
        return;
      }

      const result = await handleCart(product);
      if (!result.success) {
        toast.error(result.message || "Operation failed to add cart");
        return;
      }
      toast.success(result.message || "Product added to cart");
      return;
    } finally {
      setIsAddToCard(false);
    }
  };

  return (
    <button
      disabled={isAddToCard}
      onClick={() => handleAddToCart(product)}
      className={`btn btn-primary disabled:btn-disabled ${className} `}
    >
      {isAddToCard ? (
        <BiLoader size={16} className="animate-spin" />
      ) : (
        <>
          <BiCart size={16} />
          কার্টে যোগ করুন
        </>
      )}
    </button>
  );
};

export default AddToCardBtn;
