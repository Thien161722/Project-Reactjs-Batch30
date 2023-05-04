import React from "react";

const ResponsiveProfessional = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <section>
      <div className="sections section_one flex">{children}</div>
    </section>
  );
};

export default ResponsiveProfessional;
