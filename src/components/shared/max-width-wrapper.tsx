import { ReactNode } from "react";

const MaxWidthWrapper = ({
  maxWidth,
  className = "",
  autoMargin = true,
  children,
}: MaxWidthWrapperProps) => {
  return (
    <div
      className={`${autoMargin ? "mx-auto" : ""} size-full ${className}`}
      style={{ maxWidth: maxWidth }}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;

interface MaxWidthWrapperProps {
  maxWidth: string;
  className?: string;
  autoMargin?: boolean;
  children: ReactNode;
}
