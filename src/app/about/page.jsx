import SectionHeader from "@/components/common/SectionHeader";
import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <SectionHeader
        title="আমাদের সম্পর্কে"
        subTitle="Hero Kidz একটি শিশু-কেন্দ্রিক educational toy ও kids product platform।
        আমাদের লক্ষ্য হলো শিশুদের শেখাকে আনন্দময় ও অর্থবহ করে তোলা।"
      />

      <div className="grid md:grid-cols-3 gap-6">
        <div className="card bg-base-200 p-5 hover:shadow-lg transition-all duration-300">
          <h3 className="font-semibold text-lg mb-2">🎯 আমাদের লক্ষ্য</h3>
          <p className="text-sm text-base-content/70">
            খেলনার মাধ্যমে শেখা, কল্পনাশক্তি ও সৃজনশীলতা বৃদ্ধি করা।
          </p>
        </div>

        <div className="card bg-base-200 p-5 hover:shadow-lg transition-all duration-300">
          <h3 className="font-semibold text-lg mb-2">🧸 আমাদের পণ্য</h3>
          <p className="text-sm text-base-content/70">
            Educational toys, role-play costume এবং creative learning tools।
          </p>
        </div>

        <div className="card bg-base-200 p-5 hover:shadow-lg transition-all duration-300">
          <h3 className="font-semibold text-lg mb-2">❤️ কেন Hero Kidz</h3>
          <p className="text-sm text-base-content/70">
            নিরাপদ, non-toxic ও শিশু-বান্ধব পণ্যের নিশ্চয়তা।
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
