import React from "react";


const WhatWeOffer = ({children, title}: {children: React.ReactNode, title: string}) => {
  return (
    <section className="section_two_wrapper">
      <div className="sections section_two">
        <h2 className="section_title text-center">{title}</h2>
        <ul className="homeproduct clearfix" id="_loadList">
          {children}
        </ul>
      </div>
    </section>
  );
};

export default WhatWeOffer;
