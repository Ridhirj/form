import React from "react";

const PageTitle = ({ heading, subHeading }) => {
  return (
    <div>
      <h1>{heading}</h1>
      <p>{subHeading}</p>
    </div>
  );
};

export default PageTitle;