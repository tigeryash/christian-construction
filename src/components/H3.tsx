import React from "react";

const H3 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="text-3xl md:text-2xl lg:text-3xl font-semibold mb-8 md:mb-12 lg:mb-16 ">
      {children}
    </h3>
  );
};

export default H3;
