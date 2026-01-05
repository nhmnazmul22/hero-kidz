import React from "react";

const SectionHeader = ({
  title = "",
  subTitle = "",
  titleClassName = "",
  subTitleClassName = "",
}) => {
  return (
    <div className="mb-10 text-center">
      <h3 className={`text-4xl font-semibold ${titleClassName}`}>{title}</h3>
      <p className={`text-base text-neutral-700 mt-2 ${subTitleClassName}`}>
        {subTitle}
      </p>
    </div>
  );
};

export default SectionHeader;
