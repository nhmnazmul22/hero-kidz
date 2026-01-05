import React from "react";

const AboutPageLoading = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
      <div className="skeleton h-8 w-48"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-5/6"></div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="card bg-base-200 p-5 space-y-3">
            <div className="skeleton h-5 w-32"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-5/6"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPageLoading;
