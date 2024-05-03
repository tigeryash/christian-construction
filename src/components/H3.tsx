import { cn } from "@/lib/utils";
import React from "react";

const H3 = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-3xl md:text-2xl lg:text-3xl font-semibold mb-8 md:mb-12 lg:mb-16 ",
        className
      )}
    >
      {children}
    </h3>
  );
};

export default H3;
