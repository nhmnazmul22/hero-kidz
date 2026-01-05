import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { toys } from "@/constants";
import { BiCart, BiHeart } from "react-icons/bi";

const ProductDetails = async ({ params }) => {
  const { slug } = await params;
  const product = toys.find((toy) => toy.slug === slug);
  const {
    bangla,
    image,
    price,
    discount,
    ratings,
    reviews,
    sold,
    description,
    info,
    qna,
  } = product;

  const discountedPrice = discount
    ? Math.round(price - (price * discount) / 100)
    : price;

  return (
    <div className="main-container py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="rounded-xl p-3 flex items-center justify-center w-full aspect-square max-h-125 shadow-sm">
          <Image
            src={image}
            alt={bangla}
            width={500}
            height={500}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            priority={false}
          />
        </div>
        <div>
          <h1 className="font-bangla text-3xl md:text-4xl mb-3">{bangla}</h1>
          <div className="flex items-center gap-3 text-sm mb-2">
            <div className="flex items-center gap-1">
              <FaStar size={16} className="fill-warning text-warning" />
              <span>{ratings}</span>
              <span className="text-neutral-400">({reviews} রিভিউ)</span>
            </div>
            <span className="text-neutral-500">বিক্রি হয়েছে {sold}+</span>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <span className="text-3xl font-bold text-primary">
              ৳{discountedPrice}
            </span>

            {discount > 0 && (
              <>
                <span className="line-through text-neutral-400">৳{price}</span>
                <span className="badge badge-primary">{discount}% ছাড়</span>
              </>
            )}
          </div>

          <div className="mt-6 flex max-sm:flex-col gap-3">
            <button className="btn btn-primary sm:flex-1">
              <BiCart size={16} />
              কার্টে যোগ করুন
            </button>
            <button className="btn btn-outline btn-primary sm:flex-1">
              <BiHeart size={16} />
              ফেবারেট করুন
            </button>
          </div>

          {/* Highlights */}
          <div className="mt-8">
            <h3 className="font-semibold mb-2">মূল বৈশিষ্ট্য</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {info.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="text-2xl font-semibold mb-4">পণ্যের বিবরণ</h2>
        <p className="whitespace-pre-line text-sm leading-4">{description}</p>
      </div>

      <div className="mt-14">
        <h2 className="text-2xl font-semibold mb-4">সাধারণ প্রশ্ন</h2>

        <div className="space-y-3">
          {qna.map((item, idx) => (
            <div key={idx} className="collapse collapse-arrow bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title font-medium">{item.question}</div>
              <div className="collapse-content text-sm">{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
