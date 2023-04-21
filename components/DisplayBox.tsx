import React, { ReactNode } from "react";

const DisplayBox = ({ children }: { children: ReactNode }) => {
  return <div className="border rounded-md border-dotted">{children}</div>;
};

export default DisplayBox;
