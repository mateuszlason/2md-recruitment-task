import React from "react";

const FooterColumn = ({ headerText, children }) => {
  return (
    <div className="flex flex-col md:my-3 md:ml-0 xl:ml-8">
      <h2 className="text-sm mb-5">{headerText}</h2>
      {children}
    </div>
  );
};

export default FooterColumn;
