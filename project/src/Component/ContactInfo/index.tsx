import React from "react";

const ContactInfo = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="footer-col">
      <h4 className="widget-title">Contact Info</h4>
      <ul className="contact-info">
        {children}
      </ul>
    </div>
  );
};

export default ContactInfo;
