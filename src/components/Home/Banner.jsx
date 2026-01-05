import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="flex max-md:flex-col justify-between items-center gap-5 flex-wrap">
        <div className="flex-1 max-md:order-2 max-sm:text-center ">
          <p className="badge badge-primary">
            সব খেলনায় পাচ্ছেন সর্বোচ্চ ১৫% ছাড়
          </p>
          <h2
            className={`font-bangla text-5xl lg:text-6xl xl:text-7xl font-bold leading-16 lg:leading-20`}
          >
            আপনার শিশুর জন্য দিন <br className="max-sm:hidden" />
            <span className="text-primary">খেলার সাথে শেখার আনন্দ</span>
          </h2>

          <p className="mt-4 text-sm text-neutral-700 max-w-lg">
            নিরাপদ, রঙিন ও শিক্ষামূলক খেলনার মাধ্যমে আপনার শিশুর কল্পনাশক্তি,
            সৃজনশীলতা এবং বুদ্ধিবৃত্তিক বিকাশে সহায়তা করুন। আমাদের কাছে আছে সব
            বয়সের শিশুদের জন্য মানসম্মত খেলনার বিশাল সংগ্রহ।
          </p>

          <button className="btn btn-primary btn-outline mt-5">
            খেলনা দেখুন
          </button>
        </div>
        <div className="flex-1 max-md:order-1 flex justify-center md:justify-end items-center">
          <Image
            src="/assets/hero.png"
            alt="Hero banner"
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
