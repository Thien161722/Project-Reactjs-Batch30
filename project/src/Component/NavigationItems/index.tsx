import React from "react";
import {Link} from 'react-router-dom'

const NavigationItems = ({
  valuePath = "",
  label = "",
}: {
  valuePath: string;
  label: string;
}) => {
  return (
    <li>
      <Link to={valuePath}>{label}</Link>
    </li>
  );
};

export default NavigationItems;
