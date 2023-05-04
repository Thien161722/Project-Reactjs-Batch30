import React from "react";
import {Link} from 'react-router-dom'

const AboutUs = ({link, label, content}: {link: string, label: string, content: string}) => {
  return (
    <div className="footer-col">
      <h4 className="widget-title">About Us</h4>
      <Link to={link}>{label}</Link>
      <p>
        {content}
      </p>
    </div>
  );
};

export default AboutUs;
