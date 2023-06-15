import clsx from "clsx";
import React, { forwardRef } from "react";
import "./Stack.scss";

type StackProps = {
  children: React.ReactNode;
  gap?: number;
  align?: "start" | "center" | "end" | "baseline";
  justifyContent?: "center" | "space-around" | "space-between";
  className?: string | boolean;
  style?: React.CSSProperties;
  ref: React.RefObject<HTMLDivElement>;
};

const RowStack = ({
  children,
  gap,
  align,
  justifyContent,
  className,
  style,
}: StackProps) => {
  return (
    <div
      className={clsx("Stack Stack_horizontal", className)}
      style={{
        "--gap": gap,
        alignItems: align,
        justifyContent,
        ...style,
      } as any
      }
    >
      {children}
    </div>
  );
};

const ColStack = forwardRef(
  (
    { children, gap, align, justifyContent, className, style }: StackProps,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div
        className={clsx("Stack Stack_vertical", className)}
        style={{
          "--gap": gap,
          justifyItems: align,
          justifyContent,
          ...style,
        }}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);

export default {
  Row: RowStack,
  Col: ColStack,
};
