import SectionHeader from "@/components/common/SectionHeader";
import React from "react";

const ContactPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <SectionHeader
        title="যোগাযোগ করুন"
        subTitle="আপনার কোনো প্রশ্ন, মতামত বা সহযোগিতার প্রয়োজন হলে আমাদের সাথে যোগাযোগ
        করুন।"
      />

      <div className="card bg-base-200 p-6">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="আপনার নাম"
            className="input input-bordered w-full"
          />
          <input
            type="email"
            placeholder="ইমেইল ঠিকানা"
            className="input input-bordered w-full"
          />
          <textarea
            placeholder="আপনার বার্তা"
            className="textarea textarea-bordered w-full h-32"
          ></textarea>

          <button className="btn btn-primary w-full">বার্তা পাঠান</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
