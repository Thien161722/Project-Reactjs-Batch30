import React from "react";

const PoppularTag = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="footer-col">
      <h4 className="widget-title">Poppular Tags</h4>
      <div className="tagcloud">
        {children}
      </div>
    </div>
  );
};

export default PoppularTag;
