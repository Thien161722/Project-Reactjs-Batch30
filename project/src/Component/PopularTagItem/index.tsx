import React from "react";

const PopularTagItem = ({
  link,
  target = "_self",
  label,
}: {
  link: string;
  target?: string;
  label: string;
}) => {
  return (
    <a href={link} target={target}>
      {label}
    </a>
  );
};

export default PopularTagItem;
