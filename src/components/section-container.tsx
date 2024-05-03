import { cn } from "@/lib/utils";

type SectionContainerProps = {
  children: React.ReactNode;
  id: string;
  className?: string;
};

const SectionContainer = ({
  children,
  id,
  className,
}: SectionContainerProps) => {
  return (
    <section
      id={id}
      className={cn(
        "py-10 md:py-12 lg:py-28 px-6 md:px-16 lg:px-32 ",
        className
      )}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
