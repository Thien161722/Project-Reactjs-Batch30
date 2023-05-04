import React from "react";

const ResponsiveProfessionalSectionDetail = ({
  subTitle,
  title,
  desc,
  hotlineTitle,
  hotlineNumber,
  descHotline,
}: {
  subTitle: string;
  title: string;
  desc: string;
  hotlineTitle: string;
  hotlineNumber: string;
  descHotline: string;
}) => {
  return (
    <div className="section_one_content flex-full">
      <div className="section_subtitle">{subTitle}</div>
      <h2 className="section_title">{title}</h2>
      <p className="section_desc">{desc}</p>
      <div className="section_about_hotline">
        <strong className="hotline_title">{hotlineTitle}</strong>
        <strong className="hotline_number">
          <i className="fa fa-phone"></i> {hotlineNumber}
        </strong>
        <p className="section_desc">{descHotline}</p>
      </div>
    </div>
  );
};

export default ResponsiveProfessionalSectionDetail;
