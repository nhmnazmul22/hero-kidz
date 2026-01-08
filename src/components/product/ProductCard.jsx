import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import AddToCardBtn from "../Buttons/AddToCardBtn";

const ProductCard = ({ product }) => {
  const { bangla, image, price, discount, ratings, sold, slug } = product;

  const discountedPrice = discount
    ? Math.round(price - (price * discount) / 100)
    : price;

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition">
      <figure className="relative h-52 bg-base-200">
        <Image src={image} alt={bangla} fill className="object-contain p-4" />
        {discount > 0 && (
          <span className="badge badge-primary absolute top-3 left-3">
            {discount}% ছাড়
          </span>
        )}
      </figure>
      <div className="card-body p-4">
        <h3 className="font-bangla text-xl line-clamp-2">{bangla}</h3>
        <div className="flex items-center justify-between text-sm mt-1">
          <div className="flex items-center gap-1">
            <FaStar size={16} className="fill-warning text-warning" />
            <span>{ratings}</span>
          </div>
          <span className="text-neutral-500">বিক্রি হয়েছে {sold}+</span>
        </div>

        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg font-semibold text-primary">
            ৳{discountedPrice}
          </span>

          {discount > 0 && (
            <span className="text-sm line-through text-neutral-400">
              ৳{price}
            </span>
          )}
        </div>
        <div className="card-actions mt-4 gap-2 items-center">
          <Link href={`/products/${slug}`}>
            <button className="btn btn-outline btn-primary btn-sm flex-1">
              ডিটেলস দেখুন
            </button>
          </Link>
          <AddToCardBtn className={`btn-sm`} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
