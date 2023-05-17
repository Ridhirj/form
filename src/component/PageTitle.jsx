import React from "react";

const PageTitle = ({ heading, subHeading }) => {
  return (
    <div>
      <h1 className="primary-heading">{heading}</h1>
      <p className="fade-text fs-450">{subHeading}</p>
    </div>
  );
};

export default PageTitle;