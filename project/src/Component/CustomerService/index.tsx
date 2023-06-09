import React from "react";

const CustomerService = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="footer-col">
      <h4 className="widget-title">Customer Service</h4>
      <ul className="links">
        {children}
      </ul>
    </div>
  );
};

export default CustomerService;
