"use client";

import { useEffect } from "react";
import { FaExclamationTriangle, FaRedo } from "react-icons/fa";

const ErrorPage = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="flex items-center justify-center px-4 min-h-[calc(100vh-287px)]">
      <div className="text-center max-w-md">
        <FaExclamationTriangle className="mx-auto text-6xl text-error mb-4" />

        <h1 className="text-2xl font-bold mb-2">কিছু একটা সমস্যা হয়েছে</h1>

        <p className="text-base-content/70 mb-6">
          দুঃখিত! পেজটি লোড করতে সমস্যা হচ্ছে। অনুগ্রহ করে আবার চেষ্টা করুন।
        </p>

        <button onClick={() => reset()} className="btn btn-primary gap-2">
          <FaRedo />
          আবার চেষ্টা করুন
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
