import React from "react";

const FooterColumn = ({ headerText, children }) => {
  return (
    <div className="flex flex-col">
      <h2>{headerText}</h2>
      {children}
    </div>
  );
};

export default FooterColumn;
