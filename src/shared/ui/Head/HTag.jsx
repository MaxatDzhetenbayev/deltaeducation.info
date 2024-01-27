import React from "react";
import "./HTag.module.scss";

export const HTag = ({ variant = "h2", children, ...props }) => {
  switch (variant) {
    case "h1":
      return <h1 {...props}>{children}</h1>;
    case "h2":
      return <h2 {...props}>{children}</h2>;
    case "h3":
      return <h3 {...props}>{children}</h3>;
    case "h4":
      return <h4 {...props}>{children}</h4>;
  }
};
