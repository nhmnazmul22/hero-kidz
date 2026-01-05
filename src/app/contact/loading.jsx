import React from "react";

const ContactPageLoading = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
      <div className="skeleton h-8 w-48"></div>
      <div className="skeleton h-4 w-5/6"></div>

      <div className="card bg-base-200 p-6 space-y-4">
        <div className="skeleton h-12 w-full"></div>
        <div className="skeleton h-12 w-full"></div>
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-12 w-full"></div>
      </div>
    </div>
  );
};

export default ContactPageLoading;
