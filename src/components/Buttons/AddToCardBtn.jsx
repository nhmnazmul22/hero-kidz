"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { BiCart } from "react-icons/bi";

const AddToCardBtn = ({ className, callBackUrl = "" }) => {
  const session = useSession();
  const router = useRouter();
  const pathName = usePathname();

  const handleAddToCart = async () => {
    if (session.status !== "authenticated") {
      router.push(`/login?callBackUrl=${callBackUrl || pathName}`);
      return;
    }

    console.log(" I am add to card");
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`btn btn-primary ${className}`}
    >
      <BiCart size={16} />
      কার্টে যোগ করুন
    </button>
  );
};

export default AddToCardBtn;
