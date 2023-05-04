import React from "react";
import { Link } from "react-router-dom";

const WhatWeOfferItem = ({
  urlImage,
  link,
  title,
  desc,
  titleBtn,
}: {
  urlImage: string;
  link: string;
  title: string;
  desc: string;
  titleBtn: string;
}) => {
  return (
    <li>
      <img className="photo" alt={title} src={urlImage} />
      <div className="content">
        <h3>
          <Link to={link} title={title}>
            {title}
          </Link>
        </h3>
        <p className="section_desc">{desc}</p>
        <div className="section_btn">
          <Link className="readmore" to={link} title={title}>
            {titleBtn}
          </Link>
        </div>
      </div>
    </li>
  );
};

export default WhatWeOfferItem;
