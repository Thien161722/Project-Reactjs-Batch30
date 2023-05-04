import React from "react";

const HeaderNavigation = ({children}: {children?: React.ReactNode}) => {
  return (
    
      <ul className="flex">
        {children}
      </ul>
    
  );
};

export default HeaderNavigation;
