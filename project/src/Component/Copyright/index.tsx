import React from "react";

const Copyright = ({content}: {content: string}) => {
  return (
    <div className="footer-bottom">
      <div className="copyright">
        {content}
      </div>
    </div>
  );
};

export default Copyright;
