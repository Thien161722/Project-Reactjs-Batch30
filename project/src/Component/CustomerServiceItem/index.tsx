import React from "react";

const CustomerServiceItem = ({link, target = '_self', label}: {link: string, target?: string, label: string }) => {
  return (
    <>
        <li><a href={link} target={target}>{label}</a></li>
      {/* <li>
        <a href="#">Help &amp; FAQs</a>
      </li>
      <li>
        <a href="#">Order Tracking</a>
      </li>
      <li>
        <a href="#">Shipping &amp; Delivery</a>
      </li>
      <li>
        <a href="#">Orders History</a>
      </li>
      <li>
        <a href="#">Advanced Search</a>
      </li>
      <li>
        <a href="#">Corporate Sales</a>
      </li>
      <li>
        <a href="#">Privacy</a>
      </li> */}
    </>
  );
};

export default CustomerServiceItem;
