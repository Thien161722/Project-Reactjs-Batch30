import React from "react";

const ResponsiveProfessionalSectionImage = ({
  urlImage,
  name,
}: {
  urlImage: string;
  name: string;
}) => {
  return (
    <div className="section_one_img flex-full">
      <img src={urlImage} alt={name} />
    </div>
  );
};

export default ResponsiveProfessionalSectionImage;
