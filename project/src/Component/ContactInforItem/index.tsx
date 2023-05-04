import React from "react";

const ContactInforItem = ({
  infoLabel,
  infoLink = '',
  infoLinkTarget = '_self',
  infoLinkLabel = '',
  info = '',
}: {
  infoLabel: string;
  infoLink?: string;
  infoLinkTarget?: string;
  infoLinkLabel?: string;
  info?: string;
}) => {
  return (
    <>
      
      {infoLinkLabel ? (<li>
        <span className="contact-info-label">{infoLabel}</span>
        <a href={infoLink} target={infoLinkTarget}>{infoLinkLabel}</a>
        {info}
      </li>): (<li>
        <span className="contact-info-label">{infoLabel}</span>{info}
      </li>)}
      {/* <li>
        <span className="contact-info-label">Address:</span>123 Street Name,
        City, England
      </li>
      <li>
        <span className="contact-info-label">Phone:</span>
        <a href="tel:">(123) 456-7890</a>
      </li>
      <li>
        <span className="contact-info-label">Email:</span>
        <a href="mailto:mail@example.com">mail@example.com</a>
      </li>
      <li>
        <span className="contact-info-label">Working Days/Hours:</span> Mon -
        Sun / 9:00 AM - 8:00 PM
      </li> */}
    </>
  );
};

export default ContactInforItem;
