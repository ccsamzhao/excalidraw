import "./Island.scss";

import clsx from "clsx";
import React from "react";

type IslandProps = {
  children: React.ReactNode;
  padding?: number;
  className?: string | boolean;
  style?: object;
};

export const Island = React.forwardRef<HTMLDivElement, IslandProps>(
  ({ children, padding, className, style }, ref) => (
    <div
      className={clsx("Island", className)}
      style={{ "--padding": padding, ...style } as any}
      ref={ref}
    >
      {children}
    </div>
  ),
);
